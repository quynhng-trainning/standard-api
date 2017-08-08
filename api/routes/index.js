'use strict';

let express = require('express');
let router = express.Router();

let taskRoutes = require('./taskRoutes.js');
taskRoutes(router);

let userRoutes = require('./userRoutes.js');
userRoutes(router);

module.exports = router;