var User = require('../.././schema/user');
var Image = require('../.././schema/image');
var response = require('./response');
var AppUtil = require('../.././utils/AppUtil');

exports.add = function(req, res) {
	var name = req.body.name;
	var img = req.body.img;
	var image = new Image({
							name : name,
							img : img
						});

	image.save(function(err) {
		if (err) {
			console.error(err);
			res.json(response.createResponse(response.FAILED,"Failed to save image!"));
		} else {
			res.json(response.createResponse(response.SUCCESS, "Image saved!!"));
		}
	});
};


exports.getAll = function(req, res) {
	var id = req.query.id;
	if (AppUtil.isObjectID(id)) {
		Image.find({
			_id : {
				$ne : id
			}
		}, function(err, images) {
			if (images) {
				var data = [];
				for (var i = 0; i < images.length; i++) {
					var image = images[i];
					data.push({
						id : image._id,
						name : image.name,
						image : image.img,
					});
				}
				res.json(response.createResponse(response.SUCCESS,
						"Data found!!", data));
			} else {
				res.json(response.createResponse(response.FAILED,
						"Image not found!!"));
			}
		});
	} else {
		res.status(400)
				.json(
						response.createResponse(response.FAILED,
								"Misssing Parameter!"));
	}
};