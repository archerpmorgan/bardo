import express from 'express';
import dataController from '../controllers/dataController.js';

const dataRouter = express.Router();

// Define routes and associate them with controller functions
dataRouter.post('/profile', dataController.postProfile);
dataRouter.get('/profile', dataController.getProfile);
dataRouter.post('/session', dataController.postSession);

export default dataRouter;