import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = process.env.DB_URL;

export const connectDb = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('mongodb got connected');
  } catch (e) {
    console.log('this is the error', e);
    process.exit(1);
  }
};
