import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("bufferCommands", false);
  try {
    await mongoose.connect(`${process.env.MONGO_ATLAS_URI}/faizan_fabrics`);
    console.log(`Connected to DB`);
  } catch (error) {
    console.log(`MongoDB connection error : ${error.message}`);
  }
};

export default connectDB;
