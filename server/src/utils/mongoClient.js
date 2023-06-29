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
        default: "default"
    }, //unique identifier 
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



// Create some data to test the db connection with 
// const PhoneContact = mongoose.model("PhoneContact", phoneContactSchema);
// const Profile = mongoose.model("Profile", profileSchema);
// const testProfile = new Profile({
//     name: "Archer",
//     userID: "123",
//     defaultBookendCloseText: "",
//     defaultBookendCloseText: "",
//     phoneContacts: [
//         new PhoneContact({
//             firstName: "Laura",
//             extraName: "SAA",
//             phoneNumber: "5555555555",
//             groupType: "Core"
//         })
//     ]
// });

// testProfile.save();
