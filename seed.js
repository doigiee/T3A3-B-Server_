import { UserModel, BookingModel, dbClose} from './db.js';

// Code below is used to delete all users and bookings from the database
await UserModel.deleteMany()
console.log('All Users deleted')
await BookingModel.deleteMany()
console.log('All Bookings deleted')


// Code below is used to seed the database with users
const users = [
{
  email: 'starfish@outlook.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Peter',
  lastName: 'Force',
  phoneNumber: '0448536959',
  isAdmin: false
},
{
  email: 'watermelonsquash@live.com',
  password: '112211',
  title: 'Mrs',
  firstName: 'Sammy',
  lastName: 'Smith',
  phoneNumber: '0487823264',
  isAdmin: false
},
{
  email: 'AmBeR@gmail.com',
  password: '123456',
  title: 'Mr',
  firstName: 'Billy',
  lastName: 'Bigs',
  phoneNumber: '0478946362',
  isAdmin: false
},
{
  email: 'FernStacks@outlook.com',
  password: '123',
  title: 'Mrs',
  firstName: 'Fern',
  lastName: 'Stalis',
  phoneNumber: '0455566626',
  isAdmin: false
},
{
  email: 'Portland@live.com',
  password: '9874532',
  title: 'Mr',
  firstName: 'Larry',
  lastName: 'Sparks',
  phoneNumber: '0478989896',
  isAdmin: false
},
{
  email: 'BoobyBrownSenior@gmail.com',
  password: 'greengoblin',
  title: 'Mr',
  firstName: 'Bobby',
  lastName: 'Brown',
  phoneNumber: '0412363639',
  isAdmin: false
}
];

const bookings = [
{
  name: 'John Smith',
  email: 'smithyjohn@gmail.com',
  phone: '0455669955',
  package: 'Package 1',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Henry',
      gender: 'Male',
      breed: 'Beagle',
      age: 9,
}]
},
{
  name: 'Barbra Blacksheep',
  email: 'zzz123zzz@outlook.com',
  phone: '0422232323',
  package: 'Package 3',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Alex',
      gender: 'Female',
      breed: 'English Cockerspaniel',
      age: 6,
    }]
    
},
{
  name: 'Rita Red',
  email: 'reddish@live.com',
  phone: '0444555655',
  package: 'Package 3',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Rex',
      gender: 'Male',
      breed: 'Portacolie',
      age: 9,
    }]
},
{
  name: 'Sammy Smith',
  email: 'watermelonsquash@live.com',
  phone: '0484569963',
  package: 'Package 1',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Walter',
      gender: 'Female',
      breed: 'Dalmatian',
      age: 7,
    }]
},
{
  name: 'Carter Sue',
  email: 'peanutsinfridge@live.com',
  phone: '0445588788',
  package: 'Package 2',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Henry',
      gender: 'Female',
      breed: 'Poodle',
      age: 5,
    }]
},
{
  name: 'Theo Walt',
  email: 'disneydreamscometrue@outlook.com',
  phone: '0478877844',
  package: 'Package 1',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Samson',
      gender: 'Male',
      breed: 'Irish Setter',
      age: 7,
    }]
},
{
  name: 'Sandra Hue',
  email: 'colormeblue@live.com',
  phone: '0478788955',
  package: 'Package 3',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Baxter',
      gender: 'Female',
      breed: 'Portacolie',
      age: 8,
    }]
},
{
  name: 'Sammy Smith',
  email: 'watermelonsquash@live.com',
  phone: '0487823264',
  package: 'Package 4',
  created: new Date(),
  date: new Date('2022-12-25T09:00:00'),
  dog: [{
      name: 'Missy',
      gender: 'Male',
      breed: 'Springer Spaniel',
      age: 5,
    }]
}
];

await UserModel.insertMany(users);
await BookingModel.insertMany(bookings);
console.log('Inserted users and bookings')


dbClose()






