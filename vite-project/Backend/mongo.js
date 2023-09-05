const MongoClient = require(`mongodb`).MongoClient;
const mongoose = require(`mongoose`)
const multer = require(`multer`)
const officialsModel = require("./mongoose schema/officialSchema")
const departmentModel = require("./mongoose schema/department-schema")
const ratingModel = require("./mongoose schema/ratingSchema")
const MinisterModel = require(`./mongoose schema/ministerSchema`)
const CommentModel = require("./mongoose schema/CommentSchema");
mongoose.connect('mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/');
let departments;
const createDepartment = async (req,res,next)=>{
    const { id,department,description,direction } = req.body;
    try{
        departments = await departmentModel.create({ id,department,description,direction }) 
        res.status(200).json(departments)
    }
    catch(err){
        res.json({mssge: "coudn't create departments"})
    }
}

const getDepartment = async (req,res,next)=>{
    try{
        departments = await departmentModel.find()
        res.status(200).json(departments)
    }
    catch(err){
        res.json({mssge: "coudn't get departments!"})
    }
}

const deleteDepatment= async (req,res,next )=>{
    const id = req.params.id;
    try{
        departments = await departmentModel.findByIdAndDelete(id)
    }catch(err){
        console.log(err)
        res.status(404).json({message: "something went wrong"})
    }
}

const updateDepartment = async (req,res,next)=>{
    const id = req.params.id;
    const { department,description,direction } = req.body
    try{
        departments = await departmentModel.findByIdAndUpdate(id,req.body,{new: true}).then((departments)=>{
            if(!departments){
                return res.status(404).send();
            }
            res.json(departments)
        })
    }catch(err){
        res.json({message: "error occured!"})
    }

}
let ratings;
const getRating = async(req,res,next)=>{
    try{
        ratings = await ratingModel.find()
        res.status(200).json(ratings)
    }
    catch(err){
        res.json({message: "coudn't get department"})
    }
}

const createRating = async (req,res,next)=>{
    const { Rating,feedback } = req.body
    try{
        ratings = await ratingModel.create({ Rating,feedback })
    }catch(err){
        res.json({message: "something went wrong"})
    }
}

let ministers
const createMinister = async (req,res,next)=>{
    const { MinImage,minister,detail, Mindirection } = req.body
    try{
        ministers = await MinisterModel.create({ MinImage,minister,detail,Mindirection })
        res.send("sucesses")
    }
    catch(err){
        res.json({message: err})
    }
}

const getMinister = async (req,res,next)=>{
    try{
        ministers = await MinisterModel.find();
        res.json(ministers)
    }
    catch(err){
        res.status(404).json({message: "something went wrong!"})
    }
}

const deleteMinister = async (req,res,next) =>{
    const id = req.params.id
    try{
        ministers = await MinisterModel.findByIdAndDelete(id)
        res.send("success!")
    }
    catch(err){
        res.json({ mssge: err })
    }
}

const UpdateMinister = async (req,res,next) =>{
    const id = req.params.id
    try{
        ministers = await MinisterModel.findByIdAndUpdate(id,req.body,{ new: true }).then(ministers =>{
            if(!ministers){
                res.status(404).send("error occured!")
            }
            res.json(ministers)
        })
    }
    catch(err){
        res.json({ mssge: err })
    }
}

let officials;
const getOfficials = async (req,res,next)=>{
    try{
        officials = await officialsModel.find();
        res.json(officials)
    }
    catch(err){
        res.status(404).json({mssge: "coudn't get officials"})
    }
}


const createOfficials = async (req,res,next)=>{
    const { OfficialImg,Officials,OfficalsDet,OfficalsDir } = req.body
    try{
        officials = await officialsModel.create({ OfficialImg,Officials,OfficalsDet,OfficalsDir })
        res.status(200).json(officials)
    }
    catch(err){
        res.json({message: "coudn't create officials"})
    }
}

const updateOfficials = async (req,res,next)=>{
    const id = req.params.id;
    const { Officials,OfficalsDet,OfficalsDir } = req.body
    try{
        officials = await officialsModel.findByIdAndUpdate(id,req.body,{ new:true }).then((officials)=>{
            if(!officials){
                res.status(404).send("error occured!")
            }
            res.json(officials)
        })
    }
    catch(err){
        res.json({mssge: err})
    }

}

const deleteOfficials = async (req,res,next)=>{
    const id = req.params.id;
    try{
        officials = await officialsModel.findByIdAndDelete(id)
        res.status(200)
    }
    catch(err){
        res.json({mssge: "coudn,t Delete the officials"})
    }
}

let comments;

const getComments = async (req,res,next)=>{
    try{
        comments = await CommentModel.find();
        res.json(comments)
    }
    catch(err){
        res.json({mssge: "coudn't get comments!"})
    }
}

const createComment = async (req,res,next)=>{
    const { SelectedDep,optionOne,optiontwo,optionThree,optionFour,FeedBack } = req.body;
    try{
        comments = await CommentModel.create({ SelectedDep,optionOne,optiontwo,optionThree,optionFour,FeedBack })
        res.send("sucesses")
    }
    catch(err){
        res.status(404).json({message: "coudn't create comments"})
    }
}
exports.getRating = getRating;
exports.getDepartment = getDepartment;
exports.createDepartment = createDepartment;
exports.deleteDepatment = deleteDepatment;
exports.updateDepartment = updateDepartment;
exports.createRating = createRating;
exports.createMinister = createMinister;
exports.getMinister = getMinister;
exports.deleteMinister = deleteMinister;
exports.UpdateMinister = UpdateMinister;
exports.createOfficials = createOfficials;
exports.getOfficials = getOfficials;
exports.updateOfficials = updateOfficials;
exports.deleteOfficials = deleteOfficials;
exports.createComment = createComment;
exports.getComments = getComments;
