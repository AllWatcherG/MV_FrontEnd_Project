const express  = require("express")
const app = express()

app.get('/', (req, res) => {
    console.group("hi")
    res.sendStatus(500)
    res.send("hi")
})

app.listen(3001)