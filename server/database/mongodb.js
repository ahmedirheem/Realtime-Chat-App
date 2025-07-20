import mongoose from 'mongoose';
import { MONGODB_URI, NODE_ENV } from '../config/env.js';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI)

    console.log(`Connected to database in ${NODE_ENV} mode on the host ${connect.connection.host}`);
    
  } catch (error) {
    console.error("Error connecting to database");
    
    process.exit(1)
  }
}

export default connectDB;