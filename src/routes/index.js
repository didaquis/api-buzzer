'use strict';

const { Router } = require('express');
const routes = Router();

/**
 * Handlers for debug
 */
const debug = require('./debug');

/**
 * Routes for debug
 */
routes.get('/ping', debug.ping);


module.exports = routes;
