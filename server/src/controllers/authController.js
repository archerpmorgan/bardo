import { userSchema } from "../utils/mongoClient.js";
import mongoose from "mongoose";


// POST /login 
import bcrypt from "bcrypt";

// attempt to login user
const postLogin = async (req, res) => {
  res.status(200).json({ data: "some data" });
};

// POST /register
// attempt to register user
const postRegister = async (req, res) => {
  const User = mongoose.model("User", userSchema)
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hash(req.body.password)
  })
  user.save()
    .then(() => {
      res.status(200).json({ message: "registration succeeded" });
    })
    .catch(error => {
      if (error.code === 11000) {
        res.status(400).json({ message: "a user already exists with this email" })
        console.log('Duplicate entry error!');
      } else {
        res.status(400).json({ message: "failed to register for an unknown reason" })
        console.log('An error occurred while saving the model:', error);
      }
    })
};

// Export the controller functions for use in routes
export default {
  postLogin,
  postRegister
};