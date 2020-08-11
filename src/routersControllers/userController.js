import User from '../models/user';

// for debugging
const getUsers = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

// for debugging
const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send({ error: 'User not found.' });
  }
};

const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteUserByID = async (req, res) => {
  try {
    await User.deleteOne(req.params.id);
  } catch (e) {
    res.status(500).send({ error: 'Cant delete' });
  }
};

const updateUserByID = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export default {
  getUsers,
  createUser,
  deleteUserByID,
  updateUserByID,
  getUserByID,
};
