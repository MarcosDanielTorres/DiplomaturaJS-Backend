import express from 'express';
import userController from '../routersControllers/userController';
const router = new express.Router();

router.route('/').get(userController.getUsuarios);

export default router;
