import mongoose, { Model, Schema, Types, InferSchemaType } from 'mongoose';
import bcrypt from 'bcrypt';

// @link https://mongoosejs.com/docs/typescript.html
// @link https://mongoosejs.com/docs/typescript/statics-and-methods.html
// @link https://github.com/Automattic/mongoose/issues/10358#issuecomment-1048002477

interface GitHubMetadata {
    username: string;
    apiKey: string;
}

interface UserInterface extends mongoose.Document {
    id: Types.ObjectId
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    githubMeta: GitHubMetadata;
}

export interface UserMethods extends UserInterface {
    comparePassword: (password1: string, password2: string) => Promise<boolean>
}

interface UserModel extends Model<UserInterface, {}> { }

const UserSchema = new Schema<UserMethods, UserModel>({
    id: Schema.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    githubMeta: {
        username: String,
        apiKey: String,
    },
});

// Hooks
UserSchema.pre(
    'save',
    async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void>  {
        const user = this;
        const hash: string = await bcrypt.hash(this.password, 10);

        this.password = hash;

        next();
    }
);


// Methods
UserSchema.methods.isValidPassword = async function (password: string) {
    const user: mongoose.AnyObject = this;
    const compare: boolean = await bcrypt.compare(password, user.password);

    return compare;
};

export const UserModel = mongoose.model<UserMethods>('User', UserSchema);

export default UserModel;
