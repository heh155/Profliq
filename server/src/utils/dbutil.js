import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017",{
      dbName:"profiliq"
    }).then(()=>console.log("db connected"))
  } catch (error) {
    console.log("Error while MongoDB connection");
  }
};
