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
    console.log(req.params.id);
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

const getCommentsFromMeme = async (req, res) => {
  //recibe un ID del meme
  try {
    const meme = await Meme.findById(req.params.id);

    await meme
      .populate({
        path: 'comments',
      })
      .execPopulate();

    res.status(200).send(meme.comments);
  } catch (e) {
    res.status(404).send({ error: 'Meme not found.' });
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
    meme.comments_counter++;
    await meme.save();

    res.status(201).send({ comment });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default {
  getComments,
  getCommentsFromUser,
  getCommentsFromMeme,
  createComment,
};
