const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    
   
    "CIN": {
        type: String,
        required: true,
        // unique: true
    },
    "Company": {
        type: String,
        required: true
    },
    "RoC": {
        type: String,
        required: true,
        // unique: true
    },
    
    "Status": {
        type: String,
        required: true
    },
   
}, { timestamps: true });
module.exports = mongoose.model('company', companySchema)