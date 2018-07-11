var User = require('../.././schema/user');
var Image = require('../.././schema/image');
var response = require('./response');

exports.add = function(req, res) {
	var username = req.body.username;
	var img = req.body.img;

	Image.save(function(err) {
		if (err) {
			console.error(err);
			res.json(response.createResponse(response.FAILED,"Failed to save user!"));
		} else {
			res.json(response.createResponse(response.SUCCESS, "User saved!!"));
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
						username : user.username,
						image : image.password,
					});
				}
				res.json(response.createResponse(response.SUCCESS,
						"Data found!!", data));
			} else {
				res.json(response.createResponse(response.FAILED,
						"User not found!!"));
			}
		});
	} else {
		res.status(400)
				.json(
						response.createResponse(response.FAILED,
								"Misssing Parameter!"));
	}
};