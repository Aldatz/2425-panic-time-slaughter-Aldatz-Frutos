const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    occupation: { type: String },
    description: { type: String },
    stats: {
        strength: { type: Number },
        dexterity: { type: Number },
        stamina: { type: Number }
    },
    equipment: {
        saddlebag: { type: [mongoose.Schema.Types.ObjectId] },
        quiver: { type: Number },
        weapons: { type: [mongoose.Schema.Types.ObjectId] },
        pouch: { 
            coins: { type: Number },
            gold: { type: Number },
            precious_stones: { type: [mongoose.Schema.Types.ObjectId] }
         },
        miscellaneous: { type: [String] },
    },
});

const Character = mongoose.model('Character', CharacterSchema);

module.exports = Character


