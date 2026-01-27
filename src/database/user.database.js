import mongoose from mongoose;
import { DB_NAME } from '../constants.js';

const connectDB = async() =>{
    try{
        const mongoDB_URI = process.env.MONOGODB_URL?.replace(/\/$/, "");
        const connectionInstance = await mongoose.connect(`${mongoDB_URI}/${DB_NAME}`);
        console.log(`Databse connected Successfully, ${connectionInstance.connection.host}`)
        return connectionInstance;
    }

    catch(error){
        console.log(`Database is not connected ${error}`)
        process.exit(1);
    }
}

export default connectDB;


