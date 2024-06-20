// Create a server

const express = require('express');
const app = express()

app.listen(5000,()=>{
    console.log("Server is running on port 5000! Hurray")
})
// Basic route
app.get('/', (req, res) => {
    res.send('Server running on port 5000 successfully!');
  });