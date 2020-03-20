'use strict';

const short = require('./buzzer/short');
const medium = require('./buzzer/medium');
const long = require('./buzzer/long');
const extraLong = require('./buzzer/extra-long');

module.exports = {
	short,
	medium,
	long,
	extraLong,
};