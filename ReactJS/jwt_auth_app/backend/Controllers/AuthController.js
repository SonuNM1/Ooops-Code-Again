const UserModel = require("../Models/User");
const bcrypt = require('bcrypt') ; 
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    try{
        const {name, email, password} = req.body ; 

        const user = await UserModel.findOne({email})

        if(user){
            return res.status(409).json({
                message: 'User already exists! Please login',
                error: true, 
                success: false 
            })
        }

        const userModel = new UserModel({
            name, 
            email, 
            password
        })

        userModel.password = await bcrypt.hash(password, 10) ; 

        await userModel.save() ; 

        res.status(201).json({
            message: 'Signup successfully',
            error: false, 
            success: true 
        })
    
    }catch(error){
        console.log('Signup error: ', error || error.message) ; 

        res.status(500).json({
            message: 'Internal Server Error', 
            success: false, 
            error: true 
        })
    }
}

const login = async (req, res) => {
    try{
        const {name, email, password} = req.body ;
        
        const user = await UserModel.findOne({email}) ; 

        const errorMsg = 'Auth failed! Email or password is wrong.' ; 

        if(!user){
            return res.status(403).json({
                message: errorMsg,
                success: false, 
                error: true 
            })
        }

        // compare() takes two parameters, the first password comes from the client, and the second from database that has been stored by hashing

        const isPassEqual = await bcrypt.compare(password, user.password)

        if(!isPassEqual){
            return res.status(403).json({
                message: errorMsg, 
                success: false, 
                error: true 
            })
        }

        const jwtToken = jwt.sign(
            {
                email: user.email,
                _id: user._id 
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        )

        res.status(200).json({
            message: 'Login success',
            success: true, 
            jwtToken,
            email, 
            name: user.name  
        })

    }catch(error){
        console.log('Login error:', error || error.message) ; 

        res.status(500).json({
            message: 'Internal Server Error', 
            success: false, 
            error: true 
        })
    }
}

module.exports = {
    signup,
    login 
}