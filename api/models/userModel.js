'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validator = require('validator');

let UserSchema = new Schema({
    firstname: {
        type: String,
        Required: [true, 'Kindly enter the firstname of the user']
    },
    lastname: {
        type: String,
        Required: [true, 'Kindly enter the lastname of the user']
    },
    status: {
        type: [{
            type: String,
            enum: ['Active', 'Inactive']
        }],
        default: ['Active']
    },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    address: {
        type: String,
        maxlength: 300
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    modified_date: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('Users', UserSchema, 'user');