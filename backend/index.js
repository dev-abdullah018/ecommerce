require('dotenv').config()
const express = require('express')
const app = express()
const authRoutes = require("./routes/authRoutes")

let port = process.env.PORT

app.use("/api", authRoutes)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, function(){
    console.log(`Port is running on ${port}`);
    
})
