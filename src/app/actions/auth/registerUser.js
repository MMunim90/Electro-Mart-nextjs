"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  const { email, password, name } = payload;
  if (!email || !password) {
    return { ok: false, message: "Email and password required" };
  }

  // check existing user
  const user = await userCollection.findOne({ email });
  if (user) {
    return { ok: false, message: "User already exists" };
  }

  // hash password and insert
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    email,
    password: hashedPassword,
  };

  const result = await userCollection.insertOne(newUser);

  if (result.insertedId) {
    return { ok: true, message: "User registered successfully", userId: result.insertedId.toString() };
  }

  return { ok: false, message: "Failed to register user" };
};
