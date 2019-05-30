var mongoose = require('mongoose');

require('../all-models').toContext(global);


//------------------------
// ADD SEEDS BELOW
//------------------------


// suggested module for generating fake contextual data
// var Faker = require('faker');


// For Example

// CoolUser.create([
//   { name: 'andy', age: 24 },
//   { name: 'alex', age: 23 },
//   { name: Faker.name.firstName(), age: Faker.random.number() }
// ])

// .then(() => {
//   console.log("Seed complete!")  
//   mongoose.connection.close();
// });

Business.create([
    { person_name:'snake', business_name: 'ksitc', business_gst_number:1},
    { person_name:'snake2', business_name: 'ksitc', business_gst_number:1},
    // { person_name: Faker.name.firstName(), business_name: Faker.name.firstName(), business_gst_number: Faker.random.number() }
])

.then(() => {
    console.log("Seed Business complete!")  
    mongoose.connection.close();
  });
  

// be sure to close the connection once the queries are done

