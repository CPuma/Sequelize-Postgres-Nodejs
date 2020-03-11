import { Router } from 'express';
import {
	createProject,
	getProjects,
	getProject,
	updateProject,
	deleteProject
} from '../controllers/project.controller';

const router = Router();

router
	.get('', getProjects)
	.get('/:id', getProject)
	.post('', createProject)
	.put('/:id', updateProject)
	.delete('/:id', deleteProject);

export default router;
