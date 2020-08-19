import express from 'express';
import memeController from '../routersControllers/memeController';
const router = new express.Router();

router.route('/').get(memeController.getAllMemes);

router
  .route('/:id')

  .post(memeController.createMeme);

router.route('/users/:id').get(memeController.getMemesFromUser);

export default router;

/*
habria que importar multer y en memeController importar sharp para que pueda leer el archivo

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Please upload a valid image'))
        }

        cb(undefined, true)
    }
})

router.route('/', auth, upload.single('img')).post(memeController.createMeme)

*/
