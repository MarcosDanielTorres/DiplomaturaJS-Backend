import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    owner: {
      type: String,
      required: true,
    },
    meme: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Meme',
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
