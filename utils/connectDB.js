import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }

  const url = process.env.MONGODB_URL;

  mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connected to mongodb.");
    }
  );
};

export default connectDB;
