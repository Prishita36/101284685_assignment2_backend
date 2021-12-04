import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect('mongodb+srv://Prishita:LifeSucks15@comp3123.bj5ug.mongodb.net/101284685_assignment2?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DataBase Connected at ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
