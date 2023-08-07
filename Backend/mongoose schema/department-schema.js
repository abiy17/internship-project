const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    id: {type: Number,required: true},
    department: {type: String,required:true},
    description: {type: String,required:true},
    direction: {type: String,required:true}
})

const departmentModel = mongoose.model(`departments`, departmentSchema)
module.exports = departmentModel;