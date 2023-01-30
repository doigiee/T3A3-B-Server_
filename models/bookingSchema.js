const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    package: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    },
    date: {
        type: Date,
        required: true
    },
    dog: [{
        name: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        breed: {
            type: String
        },
        age: {
            type: Number
        }
    }],
});

module.exports = mongoose.model('Booking', bookingSchema);

// const newBooking = new Booking({
//     name: 'Sandra',
//     email: 'sandra@gmail.com',
//     phone: '0400000000',
//     package: 'Package 1',
//     created: new Date(),
//     date: new Date('2022-12-25T09:00:00'),
//     dog: [{
//         name: 'Henry',
//         gender: 'Male',
//         breed: 'Beagle',
//         age: 9,
//     }]
// });