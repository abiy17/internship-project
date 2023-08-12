const mongoose = require('mongoose');

const MinisterSchema = new mongoose.Schema({
    minister: {type: String},
    detail:  {type: String},
    direction: {type: String},
})

const MinisterModel = mongoose.model(`ministers`,MinisterSchema)
module.exports = MinisterModel;