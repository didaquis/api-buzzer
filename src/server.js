'use strict';

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const cors = require('cors');

const { logger, endLogger } = require('./utils/logger');
const { getListOfIPV4Address } = require('./utils/server-helpers');
const { statusCodeOk, statusCode404 } = require('./utils/router-helpers');
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
		res.status(statusCodeOk).send('Welcome to API Buzzer!');
	});

	app.use((req, res) => {
		res.status(statusCode404).send('404');
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
