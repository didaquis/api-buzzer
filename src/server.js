'use strict';

require('dotenv').config();

const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const cors = require('cors');

const { logger, endLogger } = require('./utils/logger');
const { getListOfIPV4Address } = require('./utils/server-helpers');

const routes = require('./routes');


const initAPI = () => {
	const app = express();

	app.use(cors({ credentials: true }));
	app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


	app.use('/api-buzzer', routes);

	app.use(/\//, (req, res) => {
		res.status(200).send('Welcome to API Buzzer!'); // eslint-disable-line no-magic-numbers
	});

	app.use((req, res) => {
		res.status(404).send('404'); // eslint-disable-line no-magic-numbers
	});

	const defaultPort = 31415;
	const port = process.env.PORT || defaultPort;

	app.listen(port, () => {
		getListOfIPV4Address().forEach(ip => {
			logger.info(`Application running on: http://${ip}:${port}`);
		});
	});


	// Managing application shutdown
	process.on('SIGINT', () => {
		logger.info('Stopping application...');
		endLogger();
		process.exit();
	});
};

initAPI();