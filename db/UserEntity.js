const mongoose =require('mongoose');
const userEntity= new mongoose.Schema({
    ticket:String,
    name:String,
    email:String,
    age:Number,
    city:String,
    tahseel:String,
    contact:Number,
    fquery:String
})
module.exports = mongoose.model('queries',userEntity);