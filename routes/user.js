
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

/*
module.exports = function(express, user)
{
    express.post('api/user', function(req, res){
        var newUser = new user();
        newUser.name = req.body.name;
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.age = req.body.age;
        newUser.contact = req.body.contact;
        newUser.email = req.body.email;
        newUser.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            console.log("Create new contact! name: " + contact.name);
            res.json({result:1})
        });
    });
}
*/