
const express = require('express')
const app = express() 

app.get('/', (req, res)=> {
    res.json([
        {
            id: 1, 
            name: 'Sonu NM',
            age: 24
        },
        {
            id: 2, 
            name: 'Soni',
            age: 21
        },
        {
            id: 3, 
            name: 'Shilpa',
            age: 28
        },
    ])
})

app.listen(5000, ()=> {
    console.log('Server running on http://localhost:5000')
})