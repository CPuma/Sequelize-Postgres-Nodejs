import Sequelize from 'sequelize';

export  const sequelize = new Sequelize('nodesequelize', 'rasec', '', {
	host: 'localhost',
	dialect: 'postgres',
	pool: {
		max: 6,
		min: 0,
		require: 3000,
		idle: 10000
	},
	loggin: true
});
