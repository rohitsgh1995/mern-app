require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database connected');
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

// app.use('/api', routes);