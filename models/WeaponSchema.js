import mongoose from 'mongoose';

const WeaponSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    description: { type: String },
    num_die_damage: { type: Number },
    type: { type: String },
    quality: { type: Number }
});

export const Weapon = mongoose.model('Weapon', WeaponSchema);