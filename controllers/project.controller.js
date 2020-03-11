import Project from '../models/project';

export const createProject = async (req, res) => {
	console.log(req.body);
	try {
		const { name, priority, description, deliverydate } = req.body;
		let newProject = await Project.create(
			{
				name,
				priority,
				description,
				deliverydate
			},
			{
				fields: [ 'name', 'priority', 'description', 'deliverydate' ]
			}
		);
		if (newProject) {
			return res.status(202).json({
				msg: 'Project created success',
				data: newProject
			});
		}
		throw new Error();
	} catch (error) {
		console.log(error);
		return res.status(500).json({ msg: 'Something goes wrong' });
	}
};

export const getProjects = async (req, res) => {
	try {
		const projects = await Project.findAll();
		return res.json({ data: projects });
	} catch (error) {
		console.log(error);
		return res.status(500).json('Someting goes wrong');
	}
};

export const getProject = async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const project = await Project.findOne({ where: { id } });
		return res.json({ data: project });
	} catch (error) {
		console.log(error);
		return res.status(500).json('Someting goes wrong');
	}
};

export const updateProject = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, priority, description, deliverydate } = req.body;
		const projects = await Project.findAll({
			where: { id },
			atributes: [ 'id', 'name', 'priority', 'description', 'deliverydate' ]
		});
		if (projects.length > 0) {
			projects.forEach(async (project) => {
				await project.update({
					name,
					priority,
					description,
					deliverydate
				});
			});
		}
		return res.json({ msg: 'Project updated, succesfully', data: projects });
	} catch (error) {
		console.log(error);
		return res.status(500).json('Someting goes wrong');
	}
};

export const deleteProject = async (req, res) => {
	try {
		const { id } = req.params;

		const deleteRowCount = await Project.destroy({ where: { id } });
		return res.json({
			msg: 'Project Deleted succesfully',
			count: deleteRowCount
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json('Someting goes wrong');
	}
};
