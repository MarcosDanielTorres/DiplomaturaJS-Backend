import mongoose from 'mongoose';
import validator from 'validator';

const memeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: Buffer,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

memeSchema.methods.toJSON = function () {
  const meme = this;
  const memeObject = meme.toObject();

  delete memeObject.description;
  delete memeObject.picture;

  return memeObject;
};

const Meme = mongoose.model('Meme', memeSchema);

export default Meme;
