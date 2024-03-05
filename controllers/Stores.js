import StoreModel from '../models/Stores.js';


/* eslint-disable require-jsdoc */
class StoreController {
	constructor() {

	}

	async create(req, res) {
		try {
			const storeModel = await StoreModel.create(req.body);

			if (storeModel) {
				res.status(201).send({status: true, id: storeModel.id});
			}
		} catch (e) {
			res.status(500).send(e);
		}
	}

	async getAll(req, res) {
		try {
			const where = req.query;

			const tiendas = await StoreModel.findAll({where});
			res.status(201).send(tiendas);
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al consultar tiendas'},
			);
		}
	}

	async getOne(req, res) {
		try {
			const {id} = req.params;

			const storeModel = await StoreModel.findByPk(id);
			if (storeModel) {
				res.status(201).send(storeModel);
			} else {
				res.status(404).send(
					{message: 'Registro no encontrado'},
				);
			}
		} catch (err) {
			res.status(500).send(
				{message: err.message || 'Error al consultar la tienda'},
			);
		}
	}

	async update(req, res) {
		try {
			const {id} = req.params;
			const data = {...req.body};

			delete data.id;

			const storeModel = await StoreModel.update(data,
				{where: {id}});

			if (typeof (storeModel[0]) !== 'undefined' && storeModel[0] === 1) {
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
				{message: err.message || 'Error al actualizar la tienda'},
			);
		}
	}

	async delete(req, res) {
		try {
			const {id} = req.params;

			const storeModel = await StoreModel.destroy({where: {id}});

			if (storeModel) {
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
				{message: err.message || 'Error al intentar borrar una tienda'},
			);
		}
	}
}

export default new StoreController();
