import express from 'express';
import authController from '../controllers/authController.js';

const authRouter = express.Router();
// auth
authRouter.post("/login", authController.postLogin);
authRouter.post("/register", authController.postRegister);

export default authRouter;