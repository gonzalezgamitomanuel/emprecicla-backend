const { Schema, model } = require('mongoose');

const adminSchema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true
});

module.exports = model('admins', adminSchema);