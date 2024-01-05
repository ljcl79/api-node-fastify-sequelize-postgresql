import TicketModel from '../models/Tickets.js';

/* eslint-disable require-jsdoc */
class TicketController {
	constructor() {

	}

	async create(req, res) {
		try {
			const ticketModel = await TicketModel.create(req.body);

			if (ticketModel) {
				res.status(201).send({status: true, id: ticketModel.id});
			}
		} catch (e) {
			res.status(500).send(e);
		}
	}

	async getAll(req, res) {
		try {
			const where = req.query;

			const tickets = await TicketModel.findAll({where});
			res.status(201).send(tickets);
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al consultar tickets'},
			);
		}
	}

	async getOne(req, res) {
		try {
			const {id} = req.params;

			const ticketModel = await TicketModel.findByPk(id);
			if (ticketModel) {
				res.status(201).send(ticketModel);
			} else {
				res.status(404).send(
					{message: 'Registro no encontrado'},
				);
			}
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al consultar el ticket'},
			);
		}
	}

	async update(req, res) {
		try {
			const {id} = req.params;
			const data = {...req.body};
			delete data.id;

			const ticketModel = await TicketModel.update(data,
				{where: {id}});

			if (typeof (ticketModel[0]) !== 'undefined' && ticketModel[0] === 1) {
				res.status(201).send({
					status: true,
				});
			} else {
				res.status(404).send(
					{message: 'Registro no encontrado'},
				);
			}
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al actualizar el ticket'},
			);
		}
	}

	async delete(req, res) {
		try {
			const {id} = req.params;

			const ticketModel = await TicketModel.destroy({where: {id}});

			if (ticketModel) {
				res.status(201).send({
					status: true,
				});
			} else {
				res.status(404).send(
					{message: 'Registro no encontrado'},
				);
			}
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al intentar borrar un ticket'},
			);
		}
	}
}

export default new TicketController();
