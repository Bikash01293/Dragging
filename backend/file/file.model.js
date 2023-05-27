const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const FileSchema = new Schema({
    file: {
        type: String,
        unique: true,
       
    },
},
{
    timestamps: true,
    versionKey: false 
});

module.exports = Book = mongoose.model("file", FileSchema);