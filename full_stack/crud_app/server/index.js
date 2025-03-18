import express from 'express' 
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/userRoute.js'
import cors from 'cors'

const app = express() ; 
app.use(bodyParser.json())
dotenv.config()

app.use(cors()) ; 

const PORT = process.env.PORT || 8000 ; 
const MONGOURL = process.env.MONGO_URL ;

mongoose.connect(MONGOURL)
    .then(() => {
        console.log("DB Connected Successfully!")
    })
    .catch((error) => {
        console.log('Database connection error: ', error)
    })


app.use('/api', route)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})