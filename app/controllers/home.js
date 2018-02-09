/*
  “This is a course requirement for CS 192 Software Engineering II under the supervision of Asst. Prof. Ma. Rowena C. Solamo of the Department of Computer Science, College of Engineering, University of the Philippines, Diliman for the AY 2017-2018”

  Authored by Edmund Alwin D. de Leon
*/

/*
2/2/18
added routes to pages and route to create user
*/
var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    res.render('home');
});

router.get('/registration', function(req, res, next){
  return res.render('registration')
});

router.get('/signin', function(req, res, next){
  return res.render('signin')
});


router.post('/registration', function(req, res, next){
  var user_fields = req.body;
  console.log(user_fields)

  User.findOne({email: user_fields.email}, function(err, user){
    console.log("USER: ", user)
    if(user == null ){
      User.create(user_fields, function(err, user){
        console.log(user)
        return res.render('signin', {message:"account created!"});
      })
    }else{
      return res.render('registration',{message:"Email is already used"});

    }
    
  }) 
 

});