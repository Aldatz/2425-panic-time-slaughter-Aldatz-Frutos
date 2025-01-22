import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
    try {
      await mongoose.connect(process.env.CONNECTION_STRING);
    } catch (error) {
      console.log(error);
    }
  }
  
  connectDB();
  
  export default mongoose;