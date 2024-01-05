/* eslint-disable require-jsdoc */
import Sequelize from 'sequelize';
import 'dotenv/config';
/*
Clase de conexión a la base de datos
*/
class DBInstance {
	constructor() {
		const dbCfg = {
			user: process.env.DB_USER,
			host: process.env.DB_HOST,
			database: process.env.DB_DATABASE,
			password: process.env.DB_PASSWORD,
			port: 5432,
		};
		this.sequelize = new Sequelize(dbCfg.database, dbCfg.user, dbCfg.password, {
			host: dbCfg.host,
			dialect: 'postgres',
			logging: false,
		});
	}
}

export default new DBInstance().sequelize;
