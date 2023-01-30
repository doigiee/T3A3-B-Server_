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
})

// ... and one for inquries ...
const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});




// Create a Mongoose model based on the schema
const UserModel = mongoose.model('User', userSchema)
const BookingModel = mongoose.model('Booking', bookingSchema)
const InquiryModel = mongoose.model('Inquiry', inquirySchema)


export { UserModel, BookingModel, InquiryModel, dbClose }