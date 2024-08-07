// Create a server


const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const User = require("./models/Users.js")

const userRoute = require ("./Routes/user.route.js")


// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: false}));
dotenv.config(); // Load environment variables from .env file

//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to the database'))
  .catch(err => console.log("Connection failed"));
  

app.listen(5000,()=>{
    console.log("Server is running on port 5000! Hurray")
})

// Basic route
app.get('/', (req, res) => {
    res.send('Server running on port 5000 successfully!');
  });



  //Routes

app.use ("/api/users", userRoute);


