import express from 'express';
const router = express.Router();

//Controllers
import { registerBusiness, loginBusiness, getMe, logoutBusiness } from '../controllers/authControllers.js';

//Middlewares
import {protect} from '../middlewares/protect.js';
import {singleUpload} from '../middlewares/multer.js';

//auth routes
router.post('/register', singleUpload, registerBusiness);
router.post('/login', loginBusiness)
router.get('/logout', logoutBusiness)
router.get('/me',protect, getMe);

export default router;