import express from 'express';
import memeController from '../routersControllers/memeController';
const router = new express.Router();

router.route('/').get(memeController.getAllMemes);

router.route('/:id').post(memeController.createMeme);

router.route('/users/:id').get(memeController.getMemesFromUser);

export default router;
