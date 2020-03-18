'use strict';

const { Router } = require('express');
const routes = Router();

/**
 * Handlers for debug
 */
const debug = require('./debug');

/**
 * Handlers for buzzer
 */
const buzzer = require('./buzzer');


/**
 * Routes for debug
 */
routes.get('/ping', debug.ping);


/**
 * Routes for buzzer
 */
routes.get('/short', buzzer.short);


module.exports = routes;
