import express from 'express'
import { UserModel, BookingModel, InquiryModel } from './db.js'
// import entryRoutes from './routes/entry_routes.js'
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json())


// Home page 
app.get('/', (req, res) => {
    res.send('Home Route');
});

// Users
app.get('/users', async (req, res) => res.send(await UserModel.find()));

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

export default app