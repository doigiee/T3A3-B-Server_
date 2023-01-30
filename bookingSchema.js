const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    time: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        default: 'Brisbane : PAWFUL'
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
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
});

module.exports = mongoose.model('Booking', bookingSchema);

const newBooking = new Booking({
    name: 'Sandra',
    email: 'sandra@gmail.com',
    phone: '0400000000',
    package: 'Package 1',
    created: new Date(),
    date: new Date('2022-12-25T09:00:00'),
    dog: [{
        name: 'Henry',
        gender: 'Male',
        breed: 'Beagle',
        age: 9,
    }]
    // location: '',
    // confirmed: true,
    // owner: 'abcdefghijklmnopqrstuvwxy'
});