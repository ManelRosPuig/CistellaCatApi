import express from 'express';
import controller from './controller.js';

const router = express.Router();

router.post('/createUserTable', controller.createUserTable);

export default router;