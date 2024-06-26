// Create a server


const express = require('express');
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const User = require("./models/Users.js")

// Middleware to parse JSON
app.use(express.json());
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

//  Creating a user

app.post("/api/users",async(req,res)=>{
  try {
    const user= await User.create(req.body)
    res.status(200).json(user)

    
  } catch (error) {
  res.status(500).json({
    message:"user not created"
  })
  }
});


// Getting all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({}); // Retrieve all users from the database
    res.status(200).json(users); // Send the list of users as a JSON response
  } catch (err) {
    res.status(500).send('Server Error'); // Send a 500 status code if an error occurs
  }
});

// Get users by id
app.get('/api/users/:id', async(req,res)=>{

  try {

    const { id } =req.params
    const user  = await User.findById(id)
    if(!user){
     return res.status(404).send("User not found")
    }
    res.json(user)
    
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
})


