const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home')
})

app.listen(port, () => {
    console.log(`Server is listening on port ` + 3000)
})
