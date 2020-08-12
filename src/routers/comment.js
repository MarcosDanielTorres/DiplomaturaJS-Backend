import express from 'express';
import commentController from '../routersControllers/commentController';
const router = new express.Router();

router.route('/').get(commentController.getComments);
router.route('/users/:userID').get(commentController.getCommentsFromUser);
router.route('/memes/:memeID').get(commentController.getCommentsFromMeme);

// cuando el usuario este autenticado, los id de usuario no van a estar mas
// y el id del meme se va a pasar por parametro cuando el usuario haga click en 
// add comment 
router.route('/:userID/:memeID').post(commentController.createComment);

export default router;
