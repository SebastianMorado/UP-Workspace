var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
// local: mongodb://localhost/cs192-development
//
seeder.connect('mongodb://localhost/cs192-development', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    '../app/models/store.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Store'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Store',
        'documents': [
            {
              name: "Starbucks",
              short_address: "Katipunan",
              long_address: "UPTC Katipunan",
              has_wifi: true,
              has_sockets: true,
              available_late: true,
              number_of_chairs: 3,
              price: 2,
              rating: 3,
              distance: .6
            },
            {
              name: "Wing James",
              short_address: "Maginhawa",
              long_address: "12 Maginoo, Barangay UP",
              has_wifi: false,
              has_sockets: true,
              available_late: true,
              number_of_chairs: 1,
              price: 1,
              rating: 2,
              distance: 1
            },
            {
              name: "McDonalds",
              short_address: "Katipunan",
              long_address: "55 Esteban Abada, Katipunan",
              has_wifi: true,
              has_sockets: true,
              available_late: false,
              number_of_chairs: 3,
              price: 1,
              rating: 1,
              distance: 2
            },
            {
              name: "Seattle's Best",
              short_address: "Katipunan",
              long_address: "21 Esteban Abada, Katipunan",
              has_wifi: true,
              has_sockets: false,
              available_late: true,
              number_of_chairs: 2,
              price: 3,
              rating: 2,
              distance: .2
            },
            {
              name: "Jollibee",
              short_address: "Katipunan",
              long_address: "69 Esteban Abada, Katipunan",
              has_wifi: true,
              has_sockets: false,
              available_late: true,
              number_of_chairs: 2,
              price: 1,
              rating: 3,
              distance: 5.5
            }
        ]
    }
];