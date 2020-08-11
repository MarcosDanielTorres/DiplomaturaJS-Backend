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
    comments_counter: {
      type: Number,
      default: 0,
    },
    raiting: {
      type: Number,
      default: 0,
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
