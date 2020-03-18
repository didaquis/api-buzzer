'use strict';

const { enviromentConfiguration } = require('../../appConfig');
const Buzzer = require('../../lib/Buzzer');
const buzzer = new Buzzer(enviromentConfiguration.gpio);

/**
 * Short logic
 * @return {String}
 */
module.exports = async () => {
	buzzer.start();
	buzzer.hold();
	buzzer.stop();
	return 'buzz';
};