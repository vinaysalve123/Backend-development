const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinay:Hello%40123@cluster0.fixynec.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected  to Database !'));

const quoteRouter = require('./routes/quote');
app.use('/quote', quoteRouter);

app.use('/', (req, res) =>{
    res.send('Hello World'); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.listen(5050, ()=> console.log('Server is running on port 5050'));