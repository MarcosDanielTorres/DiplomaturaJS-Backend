import express from 'express';
import userController from '../routersControllers/userController';
const router = new express.Router();

router.route('/').get(userController.getUser).post(userController.postUser);
router.route('/:id').get(userController.getUserByID);

export default router;
