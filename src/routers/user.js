import express from 'express';
import userController from '../routersControllers/userController';
import authJWT from '../middlewares/authJwt';
const router = new express.Router();

router.route('/').post(userController.signUp);
router.route('/login').post(userController.signIn);
router.route('/logout').post(authJWT, userController.logout);
router.route('/logoutAll').post(userController.logoutAll);
router.route('/:id').get(userController.getUserByID);
/*.patch(userController.updateUserByID)
  .delete(userController.deleteUserByID);*/

export default router;
