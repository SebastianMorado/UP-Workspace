// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
  password: String
});



mongoose.model('User', UserSchema);

