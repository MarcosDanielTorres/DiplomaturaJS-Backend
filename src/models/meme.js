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
    img: {
      type: String,
      //TODO: una vez terminado el testing hacerlo required
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
    comments_counter: {
      type: Number,
      default: 0,
    },
    raiting: {
      type: Number,
      default: 0,
      validate(value) {
        return value >= 0;
      },
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

const Meme = mongoose.model('Meme', memeSchema);

export default Meme;
