import mongoose from 'mongoose';

class MongoDBService {

    /**
     *
     */
    constructor() {
        this.createConnection().catch(err => console.log(err));
    }

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     *
     * @return {Promise<void>}
     */
    private createConnection = async (): Promise<void> => {
        try {

            // await mongoose.createConnection('mongodb://127.0.0.1:27017').asPromise();
            // console.log('Mongo Connected');


        } catch (err: any) {
            console.log('MongoDBService.createConnection()');
            console.log(err);
        }
    };

    /**
     * @description
     * @public
     * @author Keith Murphy | nomadmystics@gmail.com
     * @link https://mongoosejs.com/docs/api/mongoose.html#Mongoose.prototype.connections
     *
     * @return {Promise<void>}
     */
    public static closeConnection = async (): Promise<void> => {
        try {

            // await mongoose.disconnect();
            // console.log('Mongo Disconnected');

        } catch (err: any) {
            console.log('MongoDBService.createSchema()');
            console.error(err);
        }
    };

    public static createSchema = async (): Promise<void> => {
        try {



        } catch (err: any) {
            console.log('createSchema()');
            console.log(err);
        }
    };
}


export default MongoDBService;
