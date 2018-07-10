
/*
 * GET users listing.
 */
/*
exports.list = function(req, res){
  res.send("respond with a resource");
};
*/
module.exports = function(app, Contact)
{
    // Get ALL CONTACTS
    app.get('/api/user', function(req,res){
        user.find(function(err, user){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(user);
        })
    });
    

    // CREATE CONTACT
    app.post('/api/user', function(req, res){
        var user = new user();
        user.name = req.body.name;
        user.username = req.body.username;
        user.password = req.body.password;
        user.age = req.body.age
        user.email = req.body.email
        user.contact = req.body.contact
    
        user.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
            console.log("Create new contact! name: " + user.name + ", number : "+ user.contact);
            res.json({result: 1});
        });
    });

}
