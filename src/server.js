'use strict';

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const cors = require('cors');

const { logger, endLogger } = require('./utils/logger');
const { getListOfIPV4Address } = require('./utils/server-helpers');
const { enviromentConfiguration } = require('./appConfig');
const Buzzer = require('./lib/Buzzer');
const buzzer = new Buzzer(enviromentConfiguration.gpio);

buzzer.init();

const initAPI = () => {
	const app = express();

	app.use(cors({ credentials: true }));
	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

	const routes = require('./routes');
	app.use('/api-buzzer', routes);

	app.use(/\//, (req, res) => {
		res.status(200).send('Welcome to API Buzzer!'); // eslint-disable-line no-magic-numbers
	});

	app.use((req, res) => {
		res.status(404).send('404'); // eslint-disable-line no-magic-numbers
	});

	app.listen(enviromentConfiguration.port, () => {
		getListOfIPV4Address().forEach(ip => {
			logger.info(`Application running on: http://${ip}:${enviromentConfiguration.port}`);
		});
	});

};

initAPI();

// Managing application shutdown
process.on('SIGINT', () => {
	logger.info('Stopping application...');
	buzzer.kill();
	endLogger();
	process.exit();
});
