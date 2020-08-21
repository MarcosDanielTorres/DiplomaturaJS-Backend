import express from 'express';
import commentController from '../routersControllers/commentController';
const router = new express.Router();
import authJWT from '../middlewares/authJwt';

router.route('/users/:userID').get(commentController.getCommentsFromUser);
router.route('/memes/:memeID').get(commentController.getCommentsFromMeme);

router.route('/:memeID').post(authJWT, commentController.createComment);

export default router;
