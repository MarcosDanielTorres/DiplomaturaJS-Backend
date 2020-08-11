import User from '../models/user';

const getUser = (req, res) => {
  res.send('Estoy en home babyyy of users ofc');
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

export default { getUser, postUser };
