const express = require('express')
const app = express() 
require('dotenv').config()
require('./Models/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

const PORT = process.env.PORT || 8080 

app.get('/ping', (req, res) => {
    console.log('pong') ; 
})

// middleware 

app.use(bodyParser.json())
app.use(cors())

// router

app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})