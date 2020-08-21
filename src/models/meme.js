import mongoose from 'mongoose';

const memeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 50,
    },
    img_source: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 20,
      validate(value) {
        const categoriesAllowed = [
          'general',
          'random',
          'política',
          'deportes',
          'animales',
          'gaming',
          'anime',
        ];
        return categoriesAllowed.includes(value);
      },
    },
    comment_counter: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

memeSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'meme',
});

memeSchema.pre('remove', async function (next) {
  const meme = this;
  await Comment.deleteMany({ meme: meme._id });
  next();
});

const Meme = mongoose.model('Meme', memeSchema);

export default Meme;
