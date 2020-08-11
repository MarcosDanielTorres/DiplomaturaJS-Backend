import express from 'express';
import memeController from '../routersControllers/memeController';
const router = new express.Router();

router
  .route('/')
  .get(memeController.getMeme)
  .post(memeController.createMeme)
  .get(memeController.getAllMeme);

router.route('/:id').get(memeController.getMemeByID);

export default router;
