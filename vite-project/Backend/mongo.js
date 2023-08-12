const MongoClient = require(`mongodb`).MongoClient;
const mongoose = require(`mongoose`)
const url = "mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/store?retryWrites=true&w=majority"
const departmentModel = require("./mongoose schema/department-schema")
const ratingModel = require("./mongoose schema/ratingSchema")
const MinisterModel = require("./mongoose schema/minister-schema")
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

let ministers;
const getMinister = async (req,res,next)=>{
    try{
        ministers = await MinisterModel.find();
        res.status(200).json(ministers)
    }
    catch(err){
        res.status(404).json({ message: "coudn't get minister data"})
    }
}

const createMinister = async (req,res,next)=>{
    const { minister,detail,direction } = req.body;
    try{
        ministers = await MinisterModel.create({ minister,detail,direction })
        res.status(200).json(ministers)
    }
    catch(err){
        res.status(404).json({ message: "coudn't create the data!"})
        next(err)
    }
}

exports.getRating = getRating;
exports.getDepartment = getDepartment;
exports.createDepartment = createDepartment;
exports.deleteDepatment = deleteDepatment;
exports.updateDepartment = updateDepartment;
exports.createRating = createRating;
exports.getMinister = getMinister;
exports.createMinister = createMinister;
