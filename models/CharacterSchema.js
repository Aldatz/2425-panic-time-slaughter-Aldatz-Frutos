import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    occupation: { type: String },
    description: { type: String },
    stats: {
        strength: { type: Number },
        dexterity: { type: Number },
        stamina: { type: Number }
    },
    equipment: {
        saddlebag: { type: [String] },
        quiver: { type: Number },
        weapons: { type: [String] },
        pouch: { 
            coins: { type: Number },
            gold: { type: Number }
         },
        precious_stones: { type: [String] },
        miscellaneous: { type: [] },
    },
});

export const Character = mongoose.model('Character', CharacterSchema);