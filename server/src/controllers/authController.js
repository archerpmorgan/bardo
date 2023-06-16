import { userSchema } from "../utils/mongoClient.js";
import mongoose, { trusted } from "mongoose";


// POST /login 
// attempt to login user
const postLogin = async (req, res) => {
  res.status(200).json({ data: "some data" });
};

// POST /register
// attempt to register user
const postRegister = async (req, res) => {
  const userRequest = req.body;
  console.log(userRequest);
  const User = mongoose.model("User", userSchema)
  const user = new User({
    username: userRequest.username,
    email: userRequest.email,
    password: userRequest.password
  })
  // this doesn't work yet
  try {
    user.save();
  }
  catch (error) {
    console.log(error);
  }
  console.log("tried to save")
  res.status(200).json({ data: "some data" });
};

// Export the controller functions for use in routes
export default {
  postLogin,
  postRegister
};