import express from 'express';
import dataController from '../controllers/dataController.js';
import multer from 'multer';

const router = express.Router();

// Define routes and associate them with controller functions
router.post('/profile', dataController.postProfile);
router.get('/profile', dataController.getProfile);

// multer configuration
const inMemoryStorage = multer.memoryStorage() // temp storage for the file during transit
const uploadStrategy = multer({ storage: inMemoryStorage }).single('audio')
router.post('/audio-file', uploadStrategy, dataController.postAudioFile)

export default router;