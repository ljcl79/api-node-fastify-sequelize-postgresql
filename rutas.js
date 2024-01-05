import UsersController from './controllers/Users.js';
import StoreController from './controllers/Stores.js';
import TicketController from './controllers/Tickets.js';

const rutas = [
	{
		method: 'POST',
		url: '/usuarios',
		handler: UsersController.create,
	},
	{
		method: 'GET',
		url: '/usuarios',
		handler: UsersController.getAll,
	},
	{
		method: 'GET',
		url: '/usuarios/:id',
		handler: UsersController.getOne,
	},
	{
		method: 'PUT',
		url: '/usuarios/:id',
		handler: UsersController.update,
	},
	{
		method: 'DELETE',
		url: '/usuarios/:id',
		handler: UsersController.delete,
	},

	/* Rutas de tiendas */
	{
		method: 'POST',
		url: '/tiendas',
		handler: StoreController.create,
	},
	{
		method: 'GET',
		url: '/tiendas',
		handler: StoreController.getAll,
	},
	{
		method: 'GET',
		url: '/tiendas/:id',
		handler: StoreController.getOne,
	},
	{
		method: 'PUT',
		url: '/tiendas/:id',
		handler: StoreController.update,
	},
	{
		method: 'DELETE',
		url: '/tiendas/:id',
		handler: StoreController.delete,
	},

	/* Rutas de turnos */
	{
		method: 'POST',
		url: '/turnos',
		handler: TicketController.create,
	},
	{
		method: 'GET',
		url: '/turnos',
		handler: TicketController.getAll,
	},
	{
		method: 'GET',
		url: '/turnos/:id',
		handler: TicketController.getOne,
	},
	{
		method: 'PUT',
		url: '/turnos/:id',
		handler: TicketController.update,
	},
	{
		method: 'DELETE',
		url: '/turnos/:id',
		handler: TicketController.delete,
	},
];

export default rutas;