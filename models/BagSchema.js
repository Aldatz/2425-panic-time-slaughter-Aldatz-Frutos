import mongoose from 'mongoose';

const BagSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    description: { type: String },
    recover_stamina: { type: Number }
});

export const Bag = mongoose.model('Bag', BagSchema);