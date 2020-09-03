import Meme from '../models/meme';
import User from '../models/user';
import multer from 'multer';

//GET /memes?limit=10&skip=0
const getAllMemes = async (req, res) => {
  const memes = await Meme.find()
    .skip(parseInt(req.query.skip))
    .limit(parseInt(req.query.limit))
    .sort({ createdAt: 'desc' });
  res.status(200).send(memes);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images');
  },
  filename: (req, file, cb) => {
    var filetype = '';
    if (file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if (file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if (file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    cb(null, 'image-' + Date.now() + '.' + filetype);
  },
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const upload = multer({ storage: storage, fileFilter: imageFilter });

const uploadFile = upload.single('img_source');

const createMeme = async (req, res) => {
  if (!req.file) {
    res.status(500).send({ error: 'No file' });
  } else {
    // verificacion
    const meme = new Meme({
      owner: req.user._id,
      title: req.body.title,
      category: req.body.category,
      img_source:
        `http://localhost:${process.env.PORT || 4000}/images/` +
        req.file.filename,
    });

    try {
      await meme.save();
      res.status(201).send(meme);
    } catch (e) {
      res.status(400).send(e);
    }
  }
  /*
  const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
  req.user.avatar = buffer
  */
};

const getMemesFromUser = async (req, res) => {
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

const patchMemeByID = async (req, res) => {
  try {
    const value = req.query.increase === 'true' ? 1 : -1;

    await Meme.findOneAndUpdate(
      { _id: req.params.memeID },
      {
        $inc: { points: value },
      }
    );

    res.status(200).send({ message: 'Updated!' });
  } catch (e) {
    res.status(404).send({ error: 'Cannot update meme.' });
  }
};

export default {
  patchMemeByID,
  getAllMemes,
  createMeme,
  getMemesFromUser,
  uploadFile,
};
