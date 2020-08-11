import Meme from '../models/meme';

const getMeme= (req, res) => {
  res.send('Estoy en home babyyy of meme ofc');
};

// for debugging
const getMemeByID = async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.id);
    res.status(400).send(meme);
  } catch (e) {
    res.status(404).send({ error: 'User not found.' });
  }
};

const getAllMeme = async (req, res) => {
    try {
      const meme = await Meme.find();
      res.status(400).send(meme);
    } catch (e) {
      res.status(404).send({ error: 'User not found.' });
    }
  };

const postMeme = async (req, res) => {
  const meme = new Meme(req.body);
  try {
    await meme.save();

    res.status(201).send({ meme });
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteUser = async (req, res) => {};

const updateUser = async (req, res) => {};

export default { getMeme, postMeme, deleteUser, updateUser, getMemeByID, getAllMeme };
