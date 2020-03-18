'use strict';

const rpio = require('rpio');

const { logger } = require('../utils/logger');

/* Home doc */
/**
 * @file Buzzer class (singleton) give method to interact with buzzer
 * @see module:Buzzer
 */

/* Module doc */
/**
 * Open Buzzer class (singleton) give method to interact with buzzer
 * @module Buzzer
 */

/** Buzzer class (singleton) */
class Buzzer {

	/**
	 * Create new Buzzer (singleton)
	 * @param {Number} gpio - GPIO port
	 */
	constructor (gpio) {
		if (!Buzzer.instance) {
			this.gpio = gpio;
			this.defaultMilisecondsPause = 50;
			this.warningHandler();
			Buzzer.instance = this;
		}
		return Object.freeze(Buzzer.instance);
	}

	/*
	 * Set the initial state to low. The state is set prior to the pin
	 * being actived, so is safe for devices which require a stable setup.
	 */
	init () {
		rpio.open(this.gpio, rpio.OUTPUT, rpio.LOW);
	}

	kill () {
		rpio.close(this.gpio, rpio.PIN_RESET);
	}

	start () {
		rpio.write(this.gpio, rpio.HIGH);
	}

	stop () {
		rpio.write(this.gpio, rpio.LOW);
	}

	/*
	 * The msleep function block the application. Use a setInterval()/setTimeout() loop instead if it matters.
	 */
	hold (milis = this.defaultMilisecondsPause) {
		rpio.msleep(milis);
	}

	warningHandler () {
		/* Override default warn handler to use custom logger */
		rpio.on('warn', function (warning) {
			logger.warn(`Buzzer: ${warning}`);
		});
	}
}

module.exports = Buzzer;
