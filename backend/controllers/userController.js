const UserModel = require('../models/Users')



//getAllUsers
const getAllUsers = async(req, res) => {
    const user = await UserModel.find({})
    res.status(200).json(user)
}

const getSingleUser =  async(req, res) => {
    const { id } = req.params
    const user = await UserModel.findById(id)
    if(!user) {
        return res.status(404).json({error: 'No such user'})
    }
    res.status(200).json(user)
}

const createUser  = async(req, res) => {
    const {name, age, userName} = req.body
    try {
        const user = await UserModel.create({name, age, userName})
        res.status(200).json(user)
    }
    catch(error) {
        res.status(404).json({error: error.message})
    }
}

const deleteUser = async(req, res) => {
    const { id } = req.params
    const user = await UserModel.findByIdAndDelete({_id: id})

    res.status(200).json(user)
}

const updateUser = async(req, res) => {
    const { id } = req.params
    const user =  await UserModel.findByIdAndUpdate({_id: id}, {...req.body})

    res.status(200).json(user)
}

module.exports = { 
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
}
