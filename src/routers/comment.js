import express from 'express';
import commentController from '../routersControllers/commentController';
import authJWT from '../middlewares/authJwt';

const router = new express.Router();

//router.route('/users/:userID').get(commentController.getCommentsFromUser);
router.route('/memes/:memeID').get(commentController.getCommentsFromMeme);
router.route('/:memeID').post(authJWT, commentController.createComment);

export default router;
