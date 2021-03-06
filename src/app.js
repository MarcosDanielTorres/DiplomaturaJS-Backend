import express from 'express';
import './db/mongoose';
import userRouter from './routers/user';
import commentRouter from './routers/comment';
import memeRouter from './routers/meme';

import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());

// ver si hace falta
app.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  );
  next();
});

app.use('/images', express.static('public/images'));
app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/memes', memeRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
