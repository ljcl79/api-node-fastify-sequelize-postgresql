/* eslint-disable require-jsdoc */
import Sequelize from 'sequelize';

/*
Clase de conexión a la base de datos
*/
class DBInstance {
	constructor() {
		const dbCfg = {
			user: 'ticketapp',
			host: '209.38.245.108',
			database: 'ticketapp',
			password: 'ae28de671c',
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
