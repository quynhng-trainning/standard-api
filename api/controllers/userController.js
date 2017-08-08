'use strict';
let mongoose = require('mongoose');

//let User = mongoose.model('Users');
let User = require('../models/userModel');

exports.findAll = function(req, res) {
    User.find({}, function(err, users) {
        if (err) {
            throw err;
        } else {
            res.status(200).json(users);
            //res.write(JSON.stringify(users));
            //res.end();
        }
    });
};

exports.findById = function(req, res) {
    User.findById(req.params.userId, function(err, use) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json(use);
        }
    });
};

exports.create = function(req, res) {
    let new_user = new User(req.body);
    new_user.save(function(err) {
        if (!err) {
            res.status(200).json({
                message: 'created'
            });
        } else {
            res.status(500).send({ error: err });
        }
    });
};

exports.update = function(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function(err, user) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ result: 'ok' });
        }
    });
};

exports.delete = function(req, res) {
    User.remove({
        _id: req.params.userId
    }, function(err) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ result: 'ok' });
        }
    });
};