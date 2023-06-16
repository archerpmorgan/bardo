import express from 'express';
import dataController from '../controllers/dataController.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// Define routes and associate them with controller functions
router.post('/data/profile', dataController.postProfile);
router.get('/data/profile', dataController.getProfile);
router.post('/data.session', dataController.postSession);

// auth
router.post("/login", authController.postLogin);
router.post("/register", authController.postRegister);

export default router;