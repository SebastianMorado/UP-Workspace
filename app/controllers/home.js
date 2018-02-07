var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('home', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
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