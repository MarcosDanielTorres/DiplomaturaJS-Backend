import express from 'express';
import './db/mongoose';
import userRouter from './routers/user';
import commentRouter from './routers/comment';
import memeRouter from './routers/meme';

const app = express();
const port = 4000;

app.use(express.json());

app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/memes', memeRouter);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
