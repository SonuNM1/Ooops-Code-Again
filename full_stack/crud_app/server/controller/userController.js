import User from '../model/userModel.js'

export const create = async (req, res) => {
    try {
        const newUser = new User(req.body) ; 

        const {email} = newUser ; 

        const userExists = await User.findOne({email})
        if(userExists){
            return res.status(400).json({
                message: 'User already exists!'
            })
        }

        const savedData = await newUser.save() ; 

        // res.status(200).json(savedData) ; 

        res.status(200).json({
            message: 'User created successfully!'
        })

    } catch (error) {
        console.log('Create controller error: ', error)
        res.status(500).json({
            message: error.message 
        })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find() ; 

        if(!userData || userData.length === 0){
            return res.status(404).json({
                message: 'User not found'
            })
        }

        res.status(200).json(userData)

    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id ; 

        const userExists = await User.findById(id)
        if(!userExists){
            return res.status(404).json({
                message: 'User not found!'
            })
        }

        res.status(200).json(userExists)

    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id 

        const userExists = await User.findById(id) 
        if(!userExists){
            return res.status(404).json({
                message: 'User not found!'
            })
        }

        const updatedData = await User.findByIdAndUpdate(id, req.body, {
            new: true 
        })

        // res.status(200).json(updatedData)

        res.status(200).json({
            message: 'User updated successfully!'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id 

        const userExists = await User.findById(id)
        if(!userExists){
            return res.status(404).json({
                message: "User doesn't exits!"
            })
        }

        await User.findByIdAndDelete(id)

        res.status(200).json('User deleted successfully.')

    } catch (error) {
        res.status(500).json({
            message: error.message 
        })
    }
}