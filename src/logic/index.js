'use strict';

const ping = require('./debug/ping');
const short = require('./buzzer/short');
const medium = require('./buzzer/medium');
const long = require('./buzzer/long');

module.exports = {
	ping,
	short,
	medium,
	long,
};