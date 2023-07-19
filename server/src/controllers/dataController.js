import { profileSchema, phoneContactSchema } from "../utils/mongoClient.js";
import uploadFile from "../utils/blobClient.js"
import mongoose from "mongoose";

// POST /data/profile
// create or update a user profile
const postProfile = async (req, res) => {
  const Profile = mongoose.model("Profile", profileSchema);
  const profile = new Profile({
    photo: "",
    username: req.body.username,
    userId: req.body.userId,
    defaultBookendCloseText: req.defaultBookendCloseText,
    defaultBookendOpenText: req.defaultBookendOpenText,
    phoneContacts: req.body.phoneContacts
  })
  profile.save()
    .then((savedPofile) => {
      console.log(savedPofile);
      res.status(200).json({ message: "profile save succeeded" });
    })
    .catch(error => {
      if (error.code === 11000) {
        res.status(400).json({ message: "duplicate entry" })
        console.log('Duplicate entry error!');
      } else {
        res.status(400).json({ message: "failed to upload a profile" })
        console.log('An error occurred while saving the model:', error);
      }
    })
};

// GET /data/profile
// get a users profile data for personalization of the experience
const getProfile = async (req, res) => {
  //find user in the database by email and userId
  const Profile = mongoose.model("Profile", profileSchema);
  const storedProfile = await Profile.findOne({
    userId: req.query.userId
  }).exec();
  if (!storedProfile) {
    console.log("profile not found")
    res.status(200).json({ message: "profile not found" });
  } else {
    console.log("profile found")
    res.status(200).json(storedProfile);
  }
};

// POST /data/interaction
// The data corresponding to one use of the app 
const postInteraction = async (req, res) => {
  res.status(200).json({ data: "some data" });
}

// POST /data/audio
// upload an audio file 
const postAudioFile = async (req, res) => {
  res.status(200).json({ data: "some data" });
}

// Export the controller functions for use in routes
export default {
  getProfile,
  postProfile,
  postAudioFile
};