import express from 'express';
import commentController from '../routersControllers/commentController';
const router = new express.Router();

router.route('/').get(commentController.getComments);
router.route('/:id').get(commentController.getCommentsFromUser);
router.route('/:userID/:memeID').post(commentController.createComment);

export default router;
