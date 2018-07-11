var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var imageSchema = new Schema({
	username: String,
	img: String
});

var Image = mongoose.model('Image', imageSchema);

// make this available to our users in our Node applications
module.exports = Image;