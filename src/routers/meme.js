import express from 'express';
import memeController from '../routersControllers/memeController';
import authJWT from '../middlewares/authJwt';

const router = new express.Router();

router.route('/').get(memeController.getAllMemes);
router
  .route('/')
  .post(authJWT, memeController.uploadFile, memeController.createMeme);
router.route('/users/:id').get(memeController.getMemesFromUser);
router.route('/:memeID').patch(authJWT, memeController.patchMemeByID);

export default router;
