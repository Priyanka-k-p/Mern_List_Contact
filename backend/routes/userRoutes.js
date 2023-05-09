const express = require("express")
const router = express.Router()

const { getAllUsers, getSingleUser,createUser, deleteUser, updateUser} = require("../controllers/userController")

router.get('/', getAllUsers)

router.get('/:id', getSingleUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)

router.put('/:id', updateUser)

module.exports = router