'use strict';

const logic = require('../../logic');
const { success, fail, statusCodeOk, statusCodeError } = require('../../utils/router-helpers');

/**
 * Medium route handler
 * @async
 * @param  {Object} req - Request (Express)
 * @param  {Object} res - Response (Express)
 * @return {Object}     - An Express HTTP response with status code and JSON data
 */
module.exports = async (req, res) => {
	try {
		const result = await logic.medium();
		res.status(statusCodeOk).json(success(result));
	} catch (e) {
		res.status(statusCodeError).json(fail(e));
	}
};
