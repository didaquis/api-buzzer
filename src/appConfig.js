'use strict';

require('dotenv').config();

/* Home doc */
/**
 * @file Enviroment variables configuration for the application
 * @see module:appConfig
 */

/* Module doc */
/**
 * Enviroment variables configuration for the application
 * @module appConfig
 */

const serverPortByDefault = 31415;
const GPIOByDefault = 16; // Physical P01-P40 numbering. P16 <-> GPIO23

/**
 * Enviroment variables configuration
 * @type {object}
 */
const enviromentConfiguration = Object.freeze({
	gpio: Number(process.env.GPIO) || GPIOByDefault,
	port: Number(process.env.PORT) || serverPortByDefault
});


/** Variables configuration */
module.exports = { enviromentConfiguration };
