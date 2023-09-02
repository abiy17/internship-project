const mongoose = require(`mongoose`)

const OfficialSchema = new mongoose.Schema({
    OfficialImg: {type:String,required: true},
    Officials: {type: String,required: true},
    OfficalsDet: {type: String,required: true},
    OfficalsDir: {type: String,required: true}
})

const OfficalsModel = mongoose.model(`officials`,OfficialSchema)
module.exports = OfficalsModel; 
