import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("App connected to database");
    })
    .catch((error) => {
      console.error(error);
    });
};
export default dbConnection;
