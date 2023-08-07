const MongoClient = require(`mongodb`).MongoClient;
const mongoose = require(`mongoose`)
const url = "mongodb+srv://chuna:kdb17aby@cluster0.17tjqjc.mongodb.net/store?retryWrites=true&w=majority"
const departmentModel = require("./mongoose schema/department-schema")

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
    
}

exports.getDepartment = getDepartment;
exports.createDepartment = createDepartment;
exports.deleteDepatment = deleteDepatment;
