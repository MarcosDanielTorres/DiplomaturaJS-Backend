import express from 'express';
import memeController from '../routersControllers/memeController';
const router = new express.Router();
import authJWT from '../middlewares/authJwt'

router.route('/').get(memeController.getAllMemes);

router.route('/').post(authJWT, memeController.uploadFile, memeController.createMeme);

router.route('/users/:id').get(memeController.getMemesFromUser);

export default router;
