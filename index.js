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

// User route

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
