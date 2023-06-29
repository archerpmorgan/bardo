import mongoose, { trusted } from "mongoose";
import dotenv from 'dotenv';

mongoose.set("strictQuery", false);

// to read .env file
dotenv.config();

// Define the database URL to connect to.
const mongoDBConnectionString = "mongodb+srv://archerpmorgan:" + process.env.MONGODB_PASSWORD + "@bardocluster.mzapvww.mongodb.net/?retryWrites=true&w=majority";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDBConnectionString);
};

// Schema definitions
const Schema = mongoose.Schema;

export const phoneContactSchema = new Schema({
    firstName: String,
    extraName: String, //not necessarily last name -- though could be. just more name data
    phoneNumber: String,
    groupType: String //one of { Core, FriendsAndFamily, GroupAllHours, GroupNormalHours } 
});

export const profileSchema = new Schema({
    username:  {
        type: String,
        default: "default"
    },
    photo:  {
        type: String,
        default: "default"
    },
    userId:  {
        type: String,
        default: "default",
        unique: true
    },
    defaultBookendOpenText: {
        type: String,
        default: "default"
    },
    defaultBookendCloseText:
    {
        type: String,
        default: "default"
    },
    phoneContacts: [phoneContactSchema],
    // eventually add audio files here
});

//for authentication management
export const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String
})
