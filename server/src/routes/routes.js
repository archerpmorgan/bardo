import express from 'express';
import dataController from '../controllers/dataController.js';

const router = express.Router();

// Define routes and associate them with controller functions
router.post('/profile', dataController.postProfile);
router.get('/profile', dataController.getProfile);

export default router;