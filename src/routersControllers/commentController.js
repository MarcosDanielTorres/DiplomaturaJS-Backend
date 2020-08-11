import Comment from '../models/comment';
import User from '../models/user';
import Meme from '../models/meme';

// for debugging
const getComments = async (req, res) => {
  const comment = await Comment.find();
  res.send(comment);
};

const getCommentsFromUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user
      .populate({
        path: 'comments',
      })
      .execPopulate();

    res.status(200).send(user.comments);
  } catch (e) {
    res.status(404).send({ error: 'User not found.' });
  }
};

const createComment = async (req, res) => {
  //pasarle el usuario y el meme al que está asociado
  //:userID :memeID
  try {
    const user = await User.findById(req.params.userID);
    const meme = await Meme.findById(req.params.memeID);

    const comment = new Comment({
      ...req.body,
      owner: user._id,
      meme: meme._id,
    });

    await comment.save();

    res.status(201).send({ comment });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default {
  getComments,
  getCommentsFromUser,
  createComment,
};
