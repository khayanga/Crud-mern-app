const User = require("../models/Users.js")

// Creating a user
const createUser = async(req, res)=>{
    try {
        const user= await User.create(req.body)
        res.status(200).json(user)
    
        
      } catch (error) {
      res.status(500).json({
        message:"user not created"
      })
      }
}
// Fetchiing all users
const getUsers = async (req,res)=>{
    try {
        const users = await User.find({}); // Retrieve all users from the database
        res.status(200).json(users); // Send the list of users as a JSON response
      } catch (err) {
        res.status(500).send('Server Error'); // Send a 500 status code if an error occurs
      }

}

// Deleting a user
const deleteUser = async(req, res)=>{
    try {

        const { id } = req.params
    
        const user = await User.findByIdAndDelete(id);
    
        if(!user){
    
          res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message:"User deleted successfully"})
        
       } catch (error) {
        res.status(500).json({message:"User cant be deleted"})
        
       }
}

// Get a user
const getUser = async(req, res)=>{
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
};

// Updating a user
const updateUser = async(req, res)=>{
    try {
        const { id } =req.params
        const user  = await User.findByIdAndUpdate(id,req.body)
        if(!user){
         return res.status(404).send("User not updated")
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser)
        
      } catch (error) {
    
        console.error(error);
        res.status(500).send("User not updated")
        
      }
};

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  createUser,

};