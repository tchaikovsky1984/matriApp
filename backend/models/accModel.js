import mongoose from 'mongoose';

const accSchema = mongoose.Schema(
  {
    googleId : String,
    displayName : String,
    email: String,
    image: String,
  },{timestamps : true}
);

export const Acc = mongoose.model('Acc', accSchema);
