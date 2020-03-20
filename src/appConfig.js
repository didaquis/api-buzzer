'use strict';

require('dotenv').config();

/* Home doc */
/**
 * @file The configuration of the application environment variables
 * @see module:appConfig
 */

/* Module doc */
/**
 * The configuration of the application environment variables
 * @module appConfig
 */

/**
 * Default port server
 * @type {Number}
 */
const serverPortByDefault = 31415;

/**
 * Default GPIO pin. Using physical P01-P40 numbering
 * @type {Number}
 */
const GPIOByDefault = 16;

/**
 * Application environment variables
 * @type {object}
 */
const enviromentConfiguration = Object.freeze({
	gpio: Number(process.env.GPIO) || GPIOByDefault,
	port: Number(process.env.PORT) || serverPortByDefault
});


module.exports = { enviromentConfiguration };
