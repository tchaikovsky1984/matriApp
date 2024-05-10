import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    height:{
      type: Number,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    isMale: {
      type: Boolean,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    img: {
      data: Buffer,
      contentType: String,
      required: false,
    },
    zodiac: {
      type: String,
      required: true,
    },
    meanAgePref: {
      type : Number,
      required: false,
    },
    varAgePref: {
      type: Number,
      required: false,
    },
    meanHeightPref: {
    type: Number,
    required: false,
    },
    varHeightPref: {
      type: Number,
      required: false,
    },
    relPref: {
      type: String,
      required: false,
    },
    zodPref: {
      type: String,
      required: false,
    },
  }
);

export const User = mongoose.model('User', userSchema);
