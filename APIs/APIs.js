import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // To handle CORS issues
import { GeneralInfos } from './models/model.js'; // Adjust the path as needed
import { ContactInfos } from './models/model.js';

const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error with db connection');
});

app.post('/general-info', async (req, res) => {
    try {
        const {
            title,
            firstName,
            lastName,
            position,
            company,
            businessArena,
            employees
        } = req.body;
        console.log(req.body);

        const generalInfo = new GeneralInfos({
            title,
            firstName,
            lastName,
            position,
            company,
            businessArena,
            employees
        });

        await generalInfo.save();
        res.status(201).json({ message: 'General information saved successfully', generalInfo });
    } catch (error) {
        res.status(400).json({ message: 'Failed to save general information', error });
    }
});


app.post('/contact-info', async (req, res) => {
    try {
        const {
            street,
            additionalInfo,
            zipCode,
            place,
            country,
            phoneCode,
            phoneNumber,
            email,
            terms
        } = req.body;
        console.log(req.body);

        const contact_info = new ContactInfos({
            street,
            additionalInfo,
            zipCode,
            place,
            country,
            phoneCode,
            phoneNumber,
            email,
            terms
        });
        await contact_info.save();
        res.status(201).json({ message: 'Contact information saved successfully', contact_info });
    } catch (error) {
        res.status(400).json({ message: 'Failed to save Contact information', error });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});