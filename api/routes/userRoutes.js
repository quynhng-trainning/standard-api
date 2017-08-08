'use strict';

module.exports = (router) => {
    let userController = require('../controllers/userController');
    router.get('/users', userController.findAll);
    router.post('/users', userController.create);
    router.get('/users/:userId', userController.findById);
    router.put('/users/:userId', userController.update);
    router.delete('/users/:userId', userController.delete);
};