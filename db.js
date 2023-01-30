import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.set('strictQuery', true)

//Closes it each time.
async function dbClose() {
  await mongoose.connection.close()
  console.log("Database is disconnected!")
}

// Connect to MongoDB through Mongoose, replies with either true or false/ connected or error
try {
  console.log(process.env)
  const m = await mongoose.connect(process.env.ATLAS_DB_URL)
  console.log(m.connection.readyState === 1 ? 'Mongoose is connected!' : 'Mongoose failed to connect')
}
catch (err) {
  console.log(err)
}

// Create a Mongoose schema to define the structure of a model

//crete one for user ...
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});


// ... and one for booking ...
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


// Create a Mongoose model based on the schema
const UserModel = mongoose.model('User', userSchema)
const BookingModel = mongoose.model('Booking', bookingSchema)


export { UserModel, BookingModel, dbClose }