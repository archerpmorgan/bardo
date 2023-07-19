import mongoose, { trusted } from "mongoose";

mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDBConnectionString = `mongodb://${process.env.COSMOS_ENDPOINT}:${process.env.COSMOS_PASSWORD}@${process.env.COSMOS_ENDPOINT}.mongo.cosmos.azure.com:10255/user?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@${process.env.COSMOS_ENDPOINT}@`
console.log(mongoDBConnectionString)

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
