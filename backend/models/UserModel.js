const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'username': { type: String, required: true },
    'email': { type: String, required: true, unique: true },
    'password': { type: String, required: true },
    'avatar': { type: String, required: false, default: 'https://urlz.fr/ijSk' },
    'createdAt': { type: Date, default: Date.now() }
})

UserSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', UserSchema)