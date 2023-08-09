const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    Rating: {type: Number,required: true},
    feedback: {type: String,required:true},
})

const ratingModel = mongoose.model(`ratings`,ratingSchema)
module.exports = ratingModel;