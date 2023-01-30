//hello worldaaaaaa
// {
//     "name": "t3a2-b-server",
//     "version": "1.0.0",
//     "description": "",
//     "main": "index.js",
//     "type": "module",
//     "directories": {
//       "doc": "docs"
//     },
//     "dependencies": {
//       "cors": "^2.8.5",
//       "dotenv": "^16.0.3",
//       "express": "^4.18.2",
//       "mongoose": "^6.8.0"
//     },
//     "devDependencies": {
//       "jest": "^29.3.1",
//       "supertest": "^6.3.3"
//     },
//     "scripts": {
//       "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll",
//       "start": "node ./src/index.js"
//     },
//     "repository": {
//       "type": "git",
//       "url": "git+https://github.com/doigiee/doigiee-T3A2-B-Server.git"
//     },
//     "keywords": [],
//     "author": "",
//     "license": "ISC",
//     "bugs": {
//       "url": "https://github.com/doigiee/doigiee-T3A2-B-Server/issues"
//     },
//     "homepage": "https://github.com/doigiee/doigiee-T3A2-B-Server#readme"
//   }
  


// const mongoose = require('mongoose');

// // Create a schema for the users collection.
// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     title: {
//         type: String
//     },
//     firstName: {
//         type: String,
//         required: true
//     },
//     lastName: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: Number,
//     },
//     isAdmin: {
//         type: Boolean,
//         default: false
//     },
//     dog: [{
//         name: {
//             type: String,
//             required: true
//         },
//         gender: {
//             type: String,
//             required: true
//         },
//         breed: {
//             type: String
//         },
//         age: {
//             type: Number
//         }
//     }]
// });

// The drop() command destroys all data from a collection.
// Make sure you run it against the correct database and collection.
// db.sales.drop();

// // About us page
// app.get('/about_us', (req, res) => {
//     res.send('About us');
// });

// // Our services page
// app.get('/our_services', (req, res) => {
//     res.send('Our services');
// });

// // Our services page
// app.get('/our_services', (req, res) => {
//     res.send('Our services');
// });

// // send inquiry page
// app.get('/send_inquiry', (req, res) => {
//     res.send('Send inquiry');
// });

// // get appointments page
// app.get('/appointments_page', (req, res) => {
//     res.send('Appointments page');
// });

// // make appointment page
// app.post('/make_appointment', (req, res) => {
//     res.send('Make appointment page');
// });

// // login page
// app.post('/login', (req, res) => {
//     const data = req.body;
// });

// // create account page
// app.post('/create_page', (req, res) => {
//     const data = req.body;
// });

// // POST request to submit data
// app.post('/submit', (req, res) => {
//     const data = req.body;
    
//     // use data to do something

//     res.send('Thank you for your submission');
// });

// Insert a few documents into the sales collection.
// db.Users.insertMany([
// {
//         email: 'starfish@outlook.com',
//         title: 'Mr',
//         firstName: 'Peter',
//         lastName: 'Force',
//         phoneNumber: '0448536959',
//         isAdmin: false,
//         dog: [{
//             name: 'Henry',
//             gender: 'Male',
//             breed: 'Beagle',
//             age: 9,
//         }]
//     },
// {
//         email: 'watermelonsquash@live.com',
//         title: 'Mrs',
//         firstName: 'Sammy',
//         lastName: 'Smith',
//         phoneNumber: '0487823264',
//         isAdmin: false,
//         dog: [{
//             name: 'Alex',
//             gender: 'Female',
//             breed: 'English Cockerspaniel',
//             age: 6,
//         }]
//     },

// {
//         email: 'AmBeR@gmail.com',
//         title: 'Mr',
//         firstName: 'Billy',
//         lastName: 'Bigs',
//         phoneNumber: '0478946362',
//         isAdmin: false,
//         dog: [{
//             name: 'Sammy',
//             gender: 'Male',
//             breed: 'Poodle',
//             age: 7,
//         }]
//     },

// {
//         email: 'Katkake@gmail.com',
//         title: 'Mr',
//         firstName: 'John',
//         lastName: 'Poe',
//         phoneNumber: '0469321236',
//         isAdmin: false,
//         dog: [{
//             name: 'Rex',
//             gender: 'Male',
//             breed: 'Portacolie',
//             age: 9,
//         }]
// },

// {
//         email: 'FernStacks@outlook.com',
//         title: 'Mrs',
//         firstName: 'Fern',
//         lastName: 'Stalis',
//         phoneNumber: '0455566626',
//         isAdmin: false,
//         dog: [{
//             name: 'Walter',
//             gender: 'Female',
//             breed: 'Dalmatian',
//             age: 7,
//         }]
// },

// {
//         email: 'Portland@live.com',
//         title: 'Mr',
//         firstName: 'Larry',
//         lastName: 'Sparks',
//         phoneNumber: '0478989896',
//         isAdmin: false,
//         dog: [{
//             name: 'Henry',
//             gender: 'Male',
//             breed: 'Poodle',
//             age: 5,
//         }]
// },
    
    
    
// {
//         email: 'BoobyBrownSenior@gmail.com',
//         title: 'Mr',
//         firstName: 'Bobby',
//         lastName: 'Brown',
//         phoneNumber: '0412363639',
//         isAdmin: false,
//         dog: [{
//             name: 'Bucks',
//             gender: 'Male',
//             breed: 'Poodle',
//             age: 6,
//         }]
// }
// ]);





// testing
// testing

