const mongoose = require(`mongoose`)

const ministerSchema = new mongoose.Schema({
    minister: {type: String,required: true},
    detail: {type: String,required: true},
    direction: {type: String,required: true}
})

const MinisterModel = mongoose.model(`ministers`,ministerSchema)
module.exports = MinisterModel;