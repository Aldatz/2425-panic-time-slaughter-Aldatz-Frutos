const mongoose = require("mongoose");

const StoneSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    description: { type: String },
    value: { type: Number }
});

export const Stone = mongoose.model('Stone', StoneSchema);