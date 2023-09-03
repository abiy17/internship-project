const mongoose = require("mongoose")

const OfficialSchema = new mongoose.Schema({
    OfficialImg: { type: String,required: true },
    Officials: { type: String,required: true },
    OfficalsDet: { type: String,required: true },
    OfficalsDir: { type: String,required: true}
})

const officialsModel = mongoose.model(`officialssss`,OfficialSchema)
module.exports = officialsModel