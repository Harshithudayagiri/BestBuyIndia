import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://udayagiriharshith:Harshith@cluster0.lewet.mongodb.net/BestBuyIndia"
    )
    .then(() => console.log("DB Connected"));
};
