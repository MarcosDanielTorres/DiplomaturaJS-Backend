import Comment from '../models/comment';
import User from '../models/user';
import Meme from '../models/meme';

const getCommentsFromUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
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
    const meme = await Meme.findById(req.params.memeID);

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
  try {
    /*const meme = await Meme.findById(req.params.memeID);
    const comment = new Comment({
      ...req.body,
      owner: req.user._id,
      meme: req.params.memeID,
    });

    await comment.save();
    meme.comments_counter++;
    await meme.save();*/

    const meme = await Meme.findOneAndUpdate(
      { _id: req.params.memeID },
      { $inc: { comment_counter: 1 } }
    );

    const comment = new Comment({
      ...req.body,
      owner: req.user._id,
      meme: req.params.memeID,
    });

    await comment.save();

    res.status(201).send({ comment });
  } catch (e) {
    res.status(400).send(e);
  }
};

export default {
  getCommentsFromUser,
  getCommentsFromMeme,
  createComment,
};
