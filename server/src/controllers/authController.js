import { userSchema } from "../utils/mongoClient.js";
import mongoose from "mongoose";

// POST /login 
import bcrypt from "bcrypt";

// attempt to login user
const postLogin = async (req, res) => {
  //find user in the database by email
  const User = mongoose.model("User", userSchema);
  const storedUser =  await User.findOne({ email: req.body.email}).exec();
  if (!storedUser ) {
    console.log("user not found")
    res.status(400).json({ message: "user not found" });
    return;
  }
  //compare email
  if (storedUser.email != req.body.email) {
    console.log("user not found, email or password not matched")
    res.status(400).json({ message: "user not found, email or password not matched" });
    return;
  }
  //compare password
  var passValid = false
  const plaintextPassword = req.body.password;
  await bcrypt.compare(plaintextPassword, storedUser.password)
  .then((result) => {
    console.log(result)
    passValid = result;
    if (passValid) {
      // check for active session
      req.session.user = storedUser.id;
      req.session.save();
      res.status(200).json({ 
        message: "successfully logged in",
        userId: storedUser.id
      });
      return;
    }
    else {
      res.status(400).json({ message: "user not found, email or password not matched" });
    }
  })
  .catch(err => {
      res.status(400).json({ message: "user not found, email or password not matched" });
  })
};

// POST /register
// attempt to register user
const postRegister = async (req, res) => {

  const User = mongoose.model("User", userSchema);
  const plaintextPassword = req.body.password;
  const hash = await bcrypt.hash(plaintextPassword, 10);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  user.save()
    .then((savedUser) => {
      console.log(savedUser);
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