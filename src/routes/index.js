'use strict';

const { Router } = require('express');
const routes = Router();

/* Handlers */
const buzzer = require('./buzzer');


/* Routes */
routes.get('/short', buzzer.short);
routes.get('/medium', buzzer.medium);
routes.get('/long', buzzer.long);
routes.get('/extra-long', buzzer.extraLong);


module.exports = routes;
