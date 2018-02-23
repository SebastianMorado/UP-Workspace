// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: String,
  short_address: String,
  long_address: String,
  has_wifi: Boolean,
  has_sockets: Boolean,
  available_late: Boolean,
  number_of_chairs: Number,
  price: Number,
  rating: Number,
  distance: Number,
  type_of_store: String
});



mongoose.model('Store', StoreSchema);

