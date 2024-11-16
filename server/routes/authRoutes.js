import express from 'express';
const router = express.Router();

//Controllers
import { registerBusiness, loginBusiness, getMe, logoutBusiness } from '../controllers/authControllers.js';

//Middlewares
import {protect} from '../middlewares/protect.js';
import {singleUpload} from '../middlewares/multer.js';
import { sendMail } from '../controllers/businessControllers.js';

//auth routes
router.post('/register', singleUpload, registerBusiness, sendMail);
router.post('/login', loginBusiness)
router.get('/logout', logoutBusiness)
router.get('/me',protect, getMe);

export default router;