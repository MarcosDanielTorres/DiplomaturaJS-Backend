import express from 'express';
import userController from '../routersControllers/userController';
const router = new express.Router();

router.route('/').get(userController.getUsers).post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUserByID)
  .patch(userController.updateUserByID)
  .delete(userController.deleteUserByID);

export default router;
