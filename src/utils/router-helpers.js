'use strict';

/**
 * Generate a response object (successful cases)
 * @param {string} [data] - Data to send in response 
 */
function success (data) {
	const res = { status: 'OK' };
	if (data) res.data = data;
	return res;
}

/**
 * Generate a response object (failed cases)
 * @param {string} [error] - Error information to send in response 
 */
function fail (error) {
	const res = { status: 'ERROR' };
	if (error) res.error = error;
	return res;
}

/**
 * @constant
 * @type {Number}
 * @default
 */
const statusCodeOk = 200;

/**
 * @constant
 * @type {Number}
 * @default
 */
const statusCodeError = 400;

module.exports = { success, fail, statusCodeOk, statusCodeError };
