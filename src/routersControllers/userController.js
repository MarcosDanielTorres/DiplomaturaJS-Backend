import User from '../models/user';

const getUser = (req, res) => {
  res.send('Estoy en home babyyy of users ofc');
};

// for debugging
const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(400).send(user);
  } catch (e) {
    res.status(404).send({ error: 'User not found.' });
  }
};

const postUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteUser = async (req, res) => {};

const updateUser = async (req, res) => {};

export default { getUser, postUser, deleteUser, updateUser, getUserByID };
