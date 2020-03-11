// Imports
import express, { json } from 'express';
import morgan from 'morgan';
import projectsRoutes from './routes/projects.routes';
import tasksRoutes from './routes/tasks.routes';

// Initialization
const app = express();

// Middelwares
app.use(morgan('dev'));
app.use(json()); // remplaza el bodyParser

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/tasks', tasksRoutes);



// Exports
export default app;
