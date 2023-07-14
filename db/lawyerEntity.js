const mongoose =require('mongoose');
const lawyerSchema=new mongoose.Schema({
    name: String,
    experience:String,
    contact:Number,
    about:String
})

module.exports=mongoose.model("lawyers",lawyerSchema);