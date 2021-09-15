const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    admin: Boolean,
    phoneNumber: String
});

const User = mongoose.model('users', marriagePermitSchema);
module.exports = marriagePermit;