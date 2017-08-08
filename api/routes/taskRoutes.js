'use strict';

module.exports = (router) => {
    let taskController = require('../controllers/taskController');
    router.get('/tasks', taskController.findAll);
    router.post('/tasks', taskController.create);
    router.get('/tasks/:taskId', taskController.findById);
    router.put('/tasks/:taskId', taskController.update);
    router.delete('/tasks/:taskId', taskController.delete);
};