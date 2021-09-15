const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const marriagePermitSchema = new Schema({
    dateOfMarriage: String,
    marriageLocation: String,
    groomFirstName: String,
    groomLastName: String,
    brideMaidenLastName: String,
    brideFirstName: String
});

const marriagePermit = mongoose.model('marriagePermit', marriagePermitSchema);
module.exports = marriagePermit;