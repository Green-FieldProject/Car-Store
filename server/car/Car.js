
var mongoose = require('mongoose');
const db = require('../db/index.js');
mongoose.Promise = global.Promise;

var car= mongoose.Schema({
    name:String,
    description:String,
    imageUrl:String,
    price:Number,
    //userId : { type : mongoose.Schema.Types.ObjectId, ref: "users"}
});

var car=mongoose.model("car",car);
 
module.exports = car;