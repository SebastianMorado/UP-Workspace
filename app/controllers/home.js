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
  User = mongoose.model('User'),
  Store = mongoose.model('Store');


function auth( req, res, next ){
  return next(); //remove after development
  if(!req.session.email) return res.redirect('/');
  return next();
};


module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
    console.log("SESSION STATUS:", req.session.isLogin)
    return res.render('home',{isLogin: req.session.isLogin});
});

router.get('/registration', function(req, res, next){
  console.log("SESSION STATUS:", req.session.isLogin)
  return res.render('registration',{isLogin: req.session.isLogin});
});

router.get('/signin', function(req, res, next){
  return res.render('signin',{isLogin: req.session.isLogin});
});

router.get('/search_results', function(req, res, next){
  console.log("SESSION STATUS:", req.session.isLogin)
  return res.render('search_results',{isLogin: req.session.isLogin});
});

router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.redirect('/');
});

router.post('/login', function(req, res, next){
  var user_fields = req.body;
  console.log("BODY: ", user_fields)
  User.findOne({email: user_fields.email}, function(err, user){
    console.log("USER: ", user)
    if(user == null ){
      return res.render('signin',{message:"Email address is not registered"});
    }else if (user.password == user_fields.password){
      //successful login
      req.session.email = user.email;
      req.session.isLogin = true;
      return res.redirect('/');
    }else {
      return res.render('signin',{message:"Invalid email or password"});
    }
    
  }) 
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

router.post('/search', function(req, res, next){
  var store_name = req.body.store_name;
  console.log(store_name)

  Store.find({name: { $regex: store_name, $options: 'i' }}, function(err, stores){
    console.log("Store: ", stores)
    return res.render('search_results', {stores: stores, isLogin:req.session.isLogin});
    
  }) 
});