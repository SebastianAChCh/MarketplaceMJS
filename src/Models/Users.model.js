import { Schema, model } from 'mongoose';

const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    lastname: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      unique: false,
      trim: true,
    },
    gender: {
      type: String,
      required: true,
      unique: false,
      trim: true,
    },
    address: {
      type: Object,
      required: true,
    },
    preferences: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Users', usersSchema);
