import Meme from '../models/meme';
import User from '../models/user';

const getAllMemes = async (req, res) => {
  const memes = await Meme.find();
  res.status(200).send(memes);
};

const createMeme = async (req, res) => {
  /*
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.user.avatar = buffer
  */

  const meme = new Meme({
    ...req.body,
    owner: req.params.id,
  });

  try {
    await meme.save();

    res.status(201).send({ meme });
  } catch (e) {
    res.status(400).send(e);
  }
};

/*const getMemesFromUser = async (req, res) => {
  //pasarle el usuario
  //:id
  try {
    const user = await User.findById(req.params.id);
    await user
      .populate({
        path: 'memes',
      })
      .execPopulate();

    res.status(200).send(user.memes);
  } catch (e) {
    res.status(404).send({ error: 'User not found.' });
  }
};*/

/*const deleteMemeByID = async (req, res) => {};

const updateMemeByID = async (req, res) => {};*/

export default {
  getAllMemes,
  createMeme,
  getMemesFromUser,
};
