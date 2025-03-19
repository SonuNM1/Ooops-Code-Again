const express = require('express')
const multer = require("multer")
const {v4:uuidv4} = require("uuid")
const cloudinary = require('cloudinary').v2
const fs = require('fs')
require('./db/db')
const File = require('./models/FileModel')

const app = express()
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
})

// For file extension - uuid or Math.random() for unique filenames since the same file name can replace each other

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const random = uuidv4()
        cb(null, random + "" + file.originalname)
        // cb(null, Math.floor(Math.random()*100000) + file.originalname)
    }
})

// const upload = multer({dest: './uploads'})

const upload = multer({storage: storage})

app.post('/upload-files', upload.single('file1'), async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({
                error: 'No file uploaded'
            })
        }

        // Upload to Cloudinary 

        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path) 

        console.log('Cloudinary response: ', cloudinaryResponse)

        // Save URL to MongoDB

        const newFile = new File({
            url: cloudinaryResponse.secure_url
        })

        await newFile.save() ; 

        console.log('File URL saved to DB')

        // Delete the file from the local server 

        fs.unlink(req.file.path, (err) => {
            if(err){
                console.error('Error deleting file: ', err)
            }
            else{
                console.log('File deleted from server')
            }
        })

        // Response with the cloudinary URL 

        res.status(200).json({
            message: 'File uploaded successfully',
            url: cloudinaryResponse.secure_url
        })

    }catch(error){
        console.error('Error: ', error) 

        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
})

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`)
})