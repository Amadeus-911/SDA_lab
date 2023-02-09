const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Home 190042149')
})

app.listen(port, () => {
    console.log(`Server is listening on port ` + 3000)
})
