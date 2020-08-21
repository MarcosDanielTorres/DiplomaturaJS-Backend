import jwt from 'jsonwebtoken';
import config from './auth.config';
import User from '../models/user';

export default async function authJWT(req, res, next) {
  try {
    const token = req.header('x-access-token');
    console.log(token);

    const decoded = jwt.verify(token, config.secret);
    console.log(decoded);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
}
