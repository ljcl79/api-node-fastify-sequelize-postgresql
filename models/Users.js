import sequilize from 'sequelize';
import db from '../db.js';

const UserModel = db.define('users', {
	id: {
		type: sequilize.STRING,
		primaryKey: true,
		allowNull: false,
	},

	fullname: {
		type: sequilize.STRING,
		allowNull: false,
	},

	password: {
		type: sequilize.STRING,
		allowNull: false,
	}
});

export default UserModel;
