// lib/mongodb/mongoose.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose || { conn: null, promise: null };

const connectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
};

export { connectToDB }; 
