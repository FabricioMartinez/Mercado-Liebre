const express = require("express")
const app = express()

const path = require("path");

//para decirle a express donde se encuentran los archivos estaticos, img  y css
app.use(express.static('public'))

app.listen(3300,() => console.log("Servidor Corriendo en el puerto 3300"))

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req, res) =>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})