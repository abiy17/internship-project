const mongoose = require(`mongoose`);

const CommentSchema = new mongoose.Schema({
    SelectedDep: {type: String,required:true},
    optionOne: {type: String,required:true},
    optiontwo: {type: String,required:true},
    optionThree:{type: String,required:true},
    optionFour:{type: String,required:true},
    FeedBack: {type: String,required:true}
})

const CommentModel = mongoose.model(`comments`,CommentSchema)
module.exports = CommentModel;