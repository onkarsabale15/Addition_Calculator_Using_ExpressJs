const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const { request } = require('express');
const PORT = 3000;
app.use(bodyparser.urlencoded({extended:true}))

app.listen(PORT, ()=>{
    console.log("The Server Has Started\nListening on port :", PORT, `\nTo Access on local Machine ctrl + click on ==> http://localhost:${PORT}/`)
});

app.get('/', (req, res)=>{
    console.log("A New User Just Connected")
    res.sendFile(__dirname + '/index.html')
});

app.get('/about', (req,res)=>{
    res.send("This is About")
});

app.post('/', (req,res)=>{
    var numb1 = Number(req.body.num1)
    var numb2 = Number(req.body.num2)
    let a = numb1 - numb2
    console.log(a)
    res.send(`<h1>The Addition of The Entered numbers is = ${a} </h1>`)
});