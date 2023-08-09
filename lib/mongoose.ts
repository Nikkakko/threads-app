import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    console.log('MONGO_URL not defined');
  }

  if (isConnected) {
    console.log('Already connected to DB');
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL!);

    isConnected = true;

    console.log('Connected to DB');
  } catch (error) {
    console.log('Error connecting to DB', error);
  }
};
