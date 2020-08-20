import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../middlewares/auth.config';

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
  } catch (e) {
    res.status(404).send({ error: 'User does not exist.' });
  }
};

const signUp = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
};

/*const deleteUserByID = async (req, res) => {
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
};*/

/*
// for debugging
const getUsers = async (req, res) => {
  const user = await User.find();
  res.send(user);
};*/

const signIn = async (req, res) => {
  User.findOne({ email: req.body.email }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    const hash = bcrypt.hashSync(req.body.password, 8);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).send({
      id: user._id,
      username: user.name,
      email: user.email,
      accessToken: token,
    });
  });
};

export default {

  signUp,

  getUserByID,
  signIn,
};
