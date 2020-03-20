'use strict';

const { enviromentConfiguration } = require('../../appConfig');
const Buzzer = require('../../lib/Buzzer');
const buzzer = new Buzzer(enviromentConfiguration.gpio);

/**
 * Medium logic
 * @return {String}
 */
module.exports = () => {
	setTimeout(function (){
		buzzer.start();
		buzzer.hold(150); // eslint-disable-line no-magic-numbers
		buzzer.stop();
	}, 0);
	return 'beeeep';
};
