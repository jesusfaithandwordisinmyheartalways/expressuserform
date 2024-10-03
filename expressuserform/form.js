


const express = require('express')
const bodyParser = require('body-parser') 
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors()) 
app.use(bodyParser.json())





app.post('/submit', (req, res) => {
    const {username , password, email} = req.body;
    if(username && password && email) {
        res.status(200).json({message: 'form submitted successfully'})
    } else {
        res.status(400).json({message: 'invalid form submission'})
    }
})

const PORT_NUMBER = 3007;

app.listen(PORT_NUMBER, () => {
    console.log(`server is now on: ${PORT_NUMBER}`)
})