const express = require('express');
const router = express.Router();
const User = require("../models/Users.js")

const {getUser,getUsers,deleteUser,updateUser,createUser } = require("../controllers/user.controller.js")

router.get('/', getUsers);
router.get("/:id", getUser);

router.post("/", createUser);

// update a product
router.put("/:id", updateUser);

// delete a product
router.delete("/:id", deleteUser);



module.exports = router;