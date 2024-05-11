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
    },
    zodiac: {
      type: String,
      required: true,
    },
    meanAgePref: {
      type : Number,
    },
    varAgePref: {
      type: Number,
    },
    meanHeightPref: {
    type: Number,
    },
    varHeightPref: {
      type: Number,
    },
    relPref: {
      type: String,
    },
    zodPref: {
      type: String,
    },
  }
);

export const User = mongoose.model('User', userSchema);
