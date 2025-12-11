import mongoose from 'mongoose';

const connectDb = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }catch(err){
        console.error("Error in connecting Database",err.message);
        process.exit(1);
    }
}
export default connectDb;