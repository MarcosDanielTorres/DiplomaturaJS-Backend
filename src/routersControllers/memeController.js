import Meme from '../models/meme';
import User from '../models/user';

const getMeme = (req, res) => {
  res.send('Estoy en home babyyy of meme ofc');
  // TODO: Hacer (en el futuro) que retorne los memes de un usuario (ya autenticado o, por ahora, por ID)
};

const getMemes = async (req, res) => {
  const memes = await Meme.find();
  res.status(200).send(memes);
};

// for debugging
const getMemeByID = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);
    res.status(400).send(meme);
  } catch (e) {
    res.status(404).send({ error: 'Meme not found.' });
  }
};

const getMemesFromUser = async (req, res) => {
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

const deleteMemeByID = async (req, res) => {
  //TODO: lograr que cuando se borra un meme, también se borren sus comentarios
};

const updateMemeByID = async (req, res) => {};

export default {
  getMemes,
  createMeme,
  deleteMemeByID,
  updateMemeByID,
  getMemeByID,
  getMemesFromUser,
};
