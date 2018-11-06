const express = require('express');
const config = require('./config/dev');
const app = express();
const Rental= require('./models/rental');
const FakeDb=require('./models/fake-db');
const rentalRoutes = require('./routes/rentals');

const mongoose = require('mongoose');
mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb= new FakeDb();
    fakeDb.seedDb();
});

app.use('/api/v1/rentals',rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
   console.log("App is running");
});
