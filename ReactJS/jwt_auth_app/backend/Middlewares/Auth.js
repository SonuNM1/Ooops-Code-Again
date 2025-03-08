const jwt = require('jsonwebtoken')

// 'ensureAuthenticated' middleware is used to authenticate API requests using JWT 

const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization']   // extract the JWT token from the req headers 

    // check if the token is present 

    if(!auth){
        return res.status(403).json({
            message: 'Unauthorized, JWT token is required'
        })
    }

    try{

        // verify the token using the secret key. If valid, returns the decoded user data 

        const decoded = jwt.verify(auth, process.env.JWT_SECRET)

        // attach decoded user data to 'req.user' for later use 

        req.user = decoded ; 
        next() ; // proceed to next middleware or route handler 

    }catch(error){
        console.log('Ensure authenticated error: ', error || error.message) 

        return res.status(403).json({
            message: 'Unauthorized! JWT token wrong or expired.'
        })
    }
}

module.exports = ensureAuthenticated 

// 37