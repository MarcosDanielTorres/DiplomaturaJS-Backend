import express from 'express';
import userController from '../routersControllers/userController';
const router = new express.Router();

router.route('/').get(userController.getUsers);

router.route('/api/auth/signup').post(userController.signUp);
router.route('/api/auth/signin').post(userController.signIn);

router
  .route('/:id')
  .get(userController.getUserByID)
  .patch(userController.updateUserByID)
  .delete(userController.deleteUserByID);

export default router;
