import { UserModel, dbClose, BookingModel, InquiryModel, } from './db.js';
// AppointmentModel

await UserModel.deleteMany()
console.log('All users deleted')
await BookingModel.deleteMany()
console.log('All Bookings deleted')
await InquiryModel.deleteMany()
console.log('All Bookings deleted')


const User = await AppointmentModel.insertMany(appointments)
console.log('Inserted appointments')

const entries = [
  { category: Appoint[0], content: 'Pikachu!' },
  { category: Appoint[1], content: 'Bulbasaur!' },
  { category: Appoint[2], content: 'Squirtle' }
]

await EntryModel.insertMany(entries)
console.log('Inserted entries')

dbClose()






// Description: This file is used to seed the database with data


// for single entry
// const newUser = new User({
// newUser.save()
// .then(result => {
//     console.log(result);
// })
// .catch(err => {
//     console.log(err);
// }); 

// const newUser1 = new User ({
//   email: 'starfish@outlook.com',
//   title: 'Mr',
//   firstName: 'Peter',
//   lastName: 'Force',
//   phoneNumber: '0448536959',
//   isAdmin: false,
//   dog: [{
//       name: 'Henry',
//       gender: 'Male',
//       breed: 'Beagle',
//       age: 9,
//   }]
// });
  


  
// const newUser2 = new User({
//   email: 'watermelonsquash@live.com',
//   title: 'Mrs',
//   firstName: 'Sammy',
//   lastName: 'Smith',
//   phoneNumber: '0487823264',
//   isAdmin: false,
//   dog: [{
//       name: 'Alex',
//       gender: 'Female',
//       breed: 'English Cockerspaniel',
//       age: 6,
//   }]
// });

// const newUser3 = new User({
//   email: 'AmBeR@gmail.com',
//   title: 'Mr',
//   firstName: 'Billy',
//   lastName: 'Bigs',
//   phoneNumber: '0478946362',
//   isAdmin: false,
//   dog: [{
//       name: 'Sammy',
//       gender: 'Male',
//       breed: 'Poodle',
//       age: 7,
//   }]
// });

// const newUser4 = new User({
//   email: 'Katkake@gmail.com',
//   title: 'Mr',
//   firstName: 'John',
//   lastName: 'Poe',
//   phoneNumber: '0469321236',
//   isAdmin: false,
//   dog: [{
//       name: 'Rex',
//       gender: 'Male',
//       breed: 'Portacolie',
//       age: 9,
//   }]
// });

// const newUser5 = new User({
//   email: 'FernStacks@outlook.com',
//   title: 'Mrs',
//   firstName: 'Fern',
//   lastName: 'Stalis',
//   phoneNumber: '0455566626',
//   isAdmin: false,
//   dog: [{
//       name: 'Walter',
//       gender: 'Female',
//       breed: 'Dalmatian',
//       age: 7,
//   }]
// });

// const newUser6 = new User({
//   email: 'Portland@live.com',
//   title: 'Mr',
//   firstName: 'Larry',
//   lastName: 'Sparks',
//   phoneNumber: '0478989896',
//   isAdmin: false,
//   dog: [{
//       name: 'Henry',
//       gender: 'Male',
//       breed: 'Poodle',
//       age: 5,
//   }]
// });



// const newUser7 = new User({
//   email: 'BoobyBrownSenior@gmail.com',
//   title: 'Mr',
//   firstName: 'Bobby',
//   lastName: 'Brown',
//   phoneNumber: '0412363639',
//   isAdmin: false,
//   dog: [{
//       name: 'Bucks',
//       gender: 'Male',
//       breed: 'Poodle',
//       age: 6,
//   }]
// });


//   const data = [
//       newUser,
//       newUser2,
//       newUser3,
//       newUser4,
//       newUser5,
//       newUser6
//   ];

// db.collection("members").insertMany(data, (error, result) => {
//   if (error) {
//       console.log("error your seeding data didn’t meet criteria");
//   } else {
//       console.log(result.insertedCount + " your entries were successfully seeded.");
//   }
// });
