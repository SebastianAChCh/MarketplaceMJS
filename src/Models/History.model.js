import { Schema, model } from 'mongoose';

const HistorySchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  purchases: {
    type: Array,
    required: true,
  },
});

export default model('History', HistorySchema);
