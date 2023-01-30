import { UserModel, BookingModel, dbClose} from './db.js';

await UserModel.deleteMany()
console.log('All users deleted')
await BookingModel.deleteMany()
console.log('All Bookings deleted')


// Code below is used to seed the database with users
const newUser1 = new User ({
  email: 'starfish@outlook.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Peter',
  lastName: 'Force',
  phoneNumber: '0448536959',
  isAdmin: false
});

const newUser2 = new User({
  email: 'watermelonsquash@live.com',
  password: '112211',
  title: 'Mrs',
  firstName: 'Sammy',
  lastName: 'Smith',
  phoneNumber: '0487823264',
  isAdmin: false
});

const newUser3 = new User({
  email: 'AmBeR@gmail.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Billy',
  lastName: 'Bigs',
  phoneNumber: '0478946362',
  isAdmin: false
});

const newUser4 = new User({
  email: 'FernStacks@outlook.com',
  password: '123',
  title: 'Mrs',
  firstName: 'Fern',
  lastName: 'Stalis',
  phoneNumber: '0455566626',
  isAdmin: false
});

const newUser5 = new User({
  email: 'Portland@live.com',
  password: '9874532',
  title: 'Mr',
  firstName: 'Larry',
  lastName: 'Sparks',
  phoneNumber: '0478989896',
  isAdmin: false
});

const newUser6 = new User({
  email: 'Portland@live.com',
  password: '9874532',
  title: 'Mr',
  firstName: 'Larry',
  lastName: 'Sparks',
  phoneNumber: '0478989896',
  isAdmin: false
});

const newUser7 = new User({
  email: 'BoobyBrownSenior@gmail.com',
  password: 'greengoblin',
  title: 'Mr',
  firstName: 'Bobby',
  lastName: 'Brown',
  phoneNumber: '0412363639',
  isAdmin: false
});


  const data = [
      newUser1,
      newUser2,
      newUser3,
      newUser4,
      newUser5,
      newUser6,
      newUser7,
  ];

db.collection("Users").insertMany(data, (error, result) => {
  if (error) {
      console.log("error your seeding data didn’t meet criteria");
  } else {
      console.log(result.insertedCount + " your entries were successfully seeded.");
  }
});

console.log('Inserted users')


dbClose()






