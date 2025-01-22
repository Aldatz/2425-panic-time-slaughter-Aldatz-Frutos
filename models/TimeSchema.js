import mongoose from 'mongoose';

const TimeSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    day_number: { type: Number },
    day_week: { type: String },
    km_traveled: { type: Number },
    km_total: { type: Number }
});

export const Time = mongoose.model('Time', TimeSchema);