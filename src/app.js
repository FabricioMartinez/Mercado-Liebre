const express = require("express")
const app = express()

const path = require("path");

//para decirle a express donde se encuentran los archivos estaticos, img  y css
app.use(express.static('public'));

const port= process.env.PORT || 3001;

app.listen(port,() => console.log("Servidor Corriendo en el puerto 3001"))

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})

app.get('/login',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/login.html'))
})
