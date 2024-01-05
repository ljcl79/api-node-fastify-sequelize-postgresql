import Fastify from 'fastify';
import db from './db.js';
import rutas from './rutas.js';
import cors from '@fastify/cors';

const port = process.env.PORT || 3500;
const host =  ('RENDER' in process.env) ? '0.0.0.0' : 'localhost';

const fastify = Fastify({logger:true});
await fastify.register(cors, {

});

//POST - Inserciones                C-REATE
//GET - Consulta                    R-EAD
//PUT, PATCH - Actualizaciones      U-PDATE
//DELETE - Borrado                  D-ELETE

// eslint-disable-next-line no-unused-vars
fastify.get('/',async function(req, res) {
	return { hello: 'world'};
});

//Incorporación de las rutas
rutas.forEach((ruta) => {
	fastify.route(ruta);
});

async function database() {
	try {
		await db.sync();
		console.log('Conectado a la base de datos');
	} catch(e) {
		console.log(e);
	}
}

try {
	fastify.listen({host: host, port:port });
	database();
} catch(erro) {
	console.log(erro);
}

