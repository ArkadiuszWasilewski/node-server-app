import mongoose from "mongoose";
import Report from "./reportModel";

// Character schema - for now very simple, but in future it will be fetched also from TibiaData API
const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  characterLevel: {
    type: Number,
    required: true,
  },
  characterVocation: {
    type: String,
    enum: ["Knight", "Paladin", "Monk", "Druid", "Sorcerer"],
    required: true,
  },
  characterGear: {
    type: String,
    required: true,
  },
});

// Detailed user information
const userInformationSchema = new mongoose.Schema({
  characters: {
    type: [characterSchema],
    required: false,
  },
  reports: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  userInformation: {
    type: [userInformationSchema],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
