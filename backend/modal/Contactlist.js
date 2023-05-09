const mongoose = require('mongoose')

const Contactlist = mongoose.Schema({
    Firstname:{type:String,required:true},
    Lastname:{type:String,required:true},
    Email:{type:String},
    age:{type:Number,required:true},
},{versionKey:false,timestamps:false})

module.exports = mongoose.model('contactlist',Contactlist)
