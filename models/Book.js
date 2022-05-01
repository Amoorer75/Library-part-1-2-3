const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {type:String,require:true},
    author: {type:String,require:true},
    year: {type:String,require:true},
    genres:{type:[String],require:true},
    imageLink: {type:String,require:true},
    ISBN: {type:String,require:true}
    
})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book