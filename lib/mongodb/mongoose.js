// import mongoose from "mongoose";

// let isConnected = false; 


// export const connectToDB = async () => {
//     mongoose.set("strictQuery", true);
  
//     if (isConnected) {
//       console.log("MongoDB is already connected");
//       return;
//     }
  
//     try {
//       await mongoose.connect(process.env.MONGODB_URI, {
//         dbName: "social",
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
  
//       isConnected = true;
  
//       console.log("MongoDB is connected");
//     } catch (error) {
//       console.error("MongoDB connection error:", error);
//     }
//   };

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global).mongoose || { conn: null, promise: null };

export const connectToDB= async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
}
  