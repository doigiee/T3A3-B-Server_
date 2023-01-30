import express from 'express';
import { UserModel } from './db.js';

const router = express.Router();

router.get('/', async (req, res) => res.send(await UserModel.find().populate({ path: 'user', select: 'name' })));


router.get('/:id', async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id)
      if (user) {
        res.send(user)
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})
  
  // Update
router.put('/:id', async (req, res) => {
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
})

  // Delete
router.delete('/:id', async (req, res) => {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (user) {
        res.sendStatus(204)
      } else {
        res.status(404).send({ error: 'User not found' })
      }
    }
    catch (err) {
      res.status(500).send({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    try {
      // 1. Create a new user object with values passed in from the request
      const { email, title, firstName, lastName, phoneNumber, dog } = req.body
      const newUser = {
        email: email,
        title: title,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        dog: [{
          name: dog.name,
          gender: dog.gender,
          breed: dog.breed,
          age: dog.age
        }]
      }
      // 2. Insert the new user into the database
      const insertedUser = await UserModel.create(newUser)
      // 3. Send the new user with 201 status
      res.status(201).send(insertedUser)
    } catch (err) {
      res.status(500).send({ error: err.message })
    }
  })

  

export default router