import mongoose from 'mongoose';

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }catch{
        console.error("Error in connecting Database");
        process.exit(1);
    }
}
export default connectDb;