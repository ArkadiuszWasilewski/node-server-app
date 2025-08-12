import mongoose from 'mongoose'

//Subschema for monsterKilled
const monsterKilledSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Count: {
        type: Number,
        required: true,
    }
})

//Subschema for lootedItems
const lootedItemSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Count: {
        type: Number,
        required: true,
    }
})

//Subschema for sessionData
const sessionDataSchema = new mongoose.Schema({
    Balance: {
        type: Number, // it should be number, change it before sending to DB
        required: true,
    },
    Damage: {
        type: Number,
        requireD: true,
    },
    "Damage/h": {
        type: Number,
        requried: true,
    },
    Healing: {
        type: Number,
        required: true,
    },
    "Healing/h": {
        type: Number,
        requried: true,
    },
    "Killed Monsters": [monsterKilledSchema],
    "Looted Items": [lootedItemSchema],
    "Raw XP Gain": {
        type: Number,
        required: true,
    },
    "Raw XP/h": {
        type: Number,
        required: true,
    },
    "Session end": {
        type: Date,
        required: true,
    },
    "Session length": {
        type: String,
        required: true,
    },
    "Session start": {
        type: Date,
        required: true,
    },
    "Supplies": {
        type: Number,
        required: true,
    },
    "XP Gain": {
        type: Number,
        required: true,
    },
    "XP/h": {
        type: Number,
        required: true,
    },
    
})

// Main Report Schema
const reportSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    sessionData: {
        type: sessionDataSchema,
        required: true,
    },
    reportDescription: {
        type: String,
        required: true,
    },
    characterVocation: {
        type: String,
        required: true,
        enum: ['Paladin', 'Knight', 'Sorcerer', 'Druid', 'Monk'], // Adjust based on valid vocations
    },
    characterLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 3000,
    },
    characterGear: {
        type: String,
        required: true,
        trim: true,
    },
    currentSpawn: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

const Report = mongoose.model('Report', reportSchema);
export default Report;