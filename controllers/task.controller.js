import { Sequelize } from 'sequelize';
import Task from '../models/task';

export const getTasks = async (req, res) => {
	try {
		const task = await Task.findAll({
			attributes: [ 'id', 'name', 'done', 'projectid' ],
			order: [ [ 'id', 'DESC' ] ]
		});
		return res.json({ data: task });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Some goes wrong' });
	}
};

export const getTasksByProject = async (req, res) => {
	try {
		const { projectid } = req.params;
		const task = await Task.findAll({
			where: { projectid },
			attributes: [ 'id', 'name', 'done', 'projectid' ],
			order: [ [ 'id', 'DESC' ] ]
		});
		return res.json({ data: task });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Some goes wrong' });
	}
};

export const getOneTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findOne({ where: { id }, attributes: [ 'id', 'name', 'done', 'projectid' ] });
		if (task) {
			return res.json({ data: task });
		}
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Some goes wrong' });
	}
};

export const createTask = async (req, res) => {
	try {
		const { name, done, projectid } = req.body;
		const task = await Task.create({ name, done, projectid }, { fields: [ 'name', 'done', 'projectid' ] });
		if (task) {
			return res.json({ data: task });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: 'Some goes wrong' });
	}
};

export const updateTask = async (req, res) => {
	try {
		const { name, done, projectid } = req.body;
		const { id } = req.params;
		const countUpdatetask = await Task.update({ name, done, projectid }, { where: { id } });
		return res.json({ msg: 'Task updated succesfully', count: countUpdatetask });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Some goes wrong' });
	}
};

export const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteCountRows = await Task.destroy({ where: { id } });
		return res.json({ msg: 'Task deleted succesfully', count: deleteCountRows });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Some goes wrong' });
	}
};
