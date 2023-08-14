const mongoose = require(`mongoose`)

const ministerSchema = new mongoose.Schema({
    MinImage: { type: String,required: true},
    minister: {type: String,required: true},
    detail: {type: String,required: true},
    Mindirection: {type: String,required: true}
})

const MinisterModel = mongoose.model(`ministers`,ministerSchema)
module.exports = MinisterModel;
