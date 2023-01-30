import express from 'express'
import { UserModel, BookingModel } from './db.js'
// import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())


// Home page 
app.get('/', (req, res) => {
    res.send('Home Route');
});

// Get all users
app.get('/users', async (req, res) => res.send(await UserModel.find()));

// Get a single user by id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.status(404).send({ error: 'User not found' });
        }
    }
    catch (err) {
        res.status(500).send({ error: err.message });
    }
});

// Update a single user by id
app.put('/users/:id', async (req, res) => {
    const {email, title, firstName, lastName, phoneNumber, dog} = req.body
    const updatedUser = { email, title, firstName, lastName, phoneNumber, dog }
    
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, updatedUser, { new: true })
      if (user) {
        res.send(user)
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
});

// Delete
app.delete('/users/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(204).send({ success: 'User deleted' })
        console.log("User deleted")
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})

export default app