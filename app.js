const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Home 190042149')
})

app.listen(process.env.port, () => {
    console.log(`Server is listening on port ` + process.env.port)
})
