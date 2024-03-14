const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { type: 'string', require: true },
    lastname: { type: 'string', require: true },
    nacionality: { type: 'string', require: true },
    document: { type: 'string', require: true, unique: true },
    user_email: { type: 'string', require: true, unique: true },
    password: { type: 'string', require: true },
    user_active: { type: 'boolean', require: true, default: false },
});

module.exports = mongoose.model("User", userSchema)