const express = require("express");
const path = require("path")
const app = express();
const publicPath = path.resolve(__dirname,"./public");

app.use(express.static(publicPath));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"))
    //res.send(publicPath)
})

app.get('/register',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
    //res.send(publicPath)
})

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
    //res.send(publicPath)
})

app.listen(3000)