import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './Routes/auth.js'
import userRoute from "./Routes/user.js"
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"

const app = express();
app.use(express.json())
app.use(cors())

dotenv.config();

// const port = process.env.PORT || 8000;
const port = process.env.PORT;

const corsOptions = {
    origin: true
};

app.get('/', (req, res) => {
    res.send('Api is working');
});

// Database connection
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
    }
};

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute) //domain/api/v1/auth/register
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)

app.listen(port, () => {
    connectDB();
    console.log('Server is running on port:' + port);
});

const API_KEY = process.env.API_KEY

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens: 100,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

// app.listen(port, () => console.log('Your server is running on Port: ' + port))
