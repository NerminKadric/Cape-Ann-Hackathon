const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const buildingPermitSchema = new Schema({
    firstName: String,
    lastName: String,
    jmbg: Number,
    address: String,
    phoneNumber: Number,
    email: String,
    lot: String
});

const buildingPermit = mongoose.model('buildingPermit', buildingPermitSchema);
module.exports = buildingPermit;