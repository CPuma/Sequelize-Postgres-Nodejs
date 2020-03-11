import { Router } from 'express';
import {
	getTasks,
	getOneTask,
	createTask,
	updateTask,
	deleteTask,
	getTasksByProject
} from '../controllers/task.controller';

const router = Router();
router
	.get('', getTasks)
	.get('/:id', getOneTask)
	.get('/project/:projectid', getTasksByProject)
	.post('', createTask)
	.put('/:id', updateTask)
	.delete('/:id', deleteTask);

export default router;
