import express from 'express';
import businessRoutes from './routes/businessRoutes.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

const app= express();

//configurations
dotenv.config(
    {
        path: './config.env'
    }
);
cloudinary.v2.config({ 
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME, 
    api_key: process.env.CLOUDINARY_CLIENT_KEY, 
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET, 
  });

//middlewares
app.use(cookieParser(
));
app.use(cors({
    origin: ['http://localhost:5173', process.env.CLIENT_URI],
    credentials: true,
    AccessControlAllowOrigin: ['http://localhost:5173', process.env.CLIENT_URI],
    AccessControlAllowCredentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/api/business', businessRoutes);
app.use('/api/business', authRoutes);


//export app
export default app;
