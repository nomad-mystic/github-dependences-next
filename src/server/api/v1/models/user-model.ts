import mongoose, { Model, Schema, Types, model } from 'mongoose';
import bcrypt from 'bcrypt';


// @link https://mongoosejs.com/docs/typescript.html

interface GitHubMetadata {
    username: string;
    apiKey: string;
}

interface UserInterface {
    id: Types.ObjectId
    email: string;
    password: string;
    firstName: string;
    LastName: string;
    githubMeta: GitHubMetadata;
}

interface UserMethodsInterface {
    isValidPassword(): Promise<boolean>
}

type UserModal = Model<UserInterface, {}, UserMethodsInterface>

const UserSchema = new Schema<UserInterface, UserModal, UserMethodsInterface>({
    id: Schema.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: String,
    LastName: String,
    githubMeta: {
        username: String,
        apiKey: String,
    },
});

// Setup hooks here

/**
 *
 */
UserSchema.pre(
    'save',
    async function(next: mongoose.CallbackWithoutResultAndOptionalError): Promise<void>  {
        const user = this;
        const hash: string = await bcrypt.hash(this.password, 10);

        this.password = hash;

        next();
    }
);

// https://mongoosejs.com/docs/typescript/statics-and-methods.html
UserSchema.method('isValidPassword', async function(password: string): Promise<boolean> {
    const user: mongoose.AnyObject = this;
    const compare: boolean = await bcrypt.compare(password, user.password);

    return compare;
});

const UserModel = model<UserInterface, UserMethodsInterface>('user', UserSchema);

export default UserModel;
