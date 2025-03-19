const mongoose = require('mongoose')

console.log('Mongo URL:', process.env.MONGO_URL);


mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB Connected')
    })
    .catch((error) => {
        console.log('DB Connection error: ', error)
    })