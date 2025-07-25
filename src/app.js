import express from 'express';
import cors from 'cors';
import urlRoutes from './routes/urlRoutes.js'; 

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/', urlRoutes);

export default app;
