const express = require('express')
const app= express()
const bodyParser= require('body-parser')
const fetch = require('node-fetch')

app.use(bodyParser.urlencoded({extended: true}))
app.post('/RetornoServer',(req,resp) =>{
    console.log(req.body)
    let Renda =req.body.Renda
    const Percapita = Renda/req.body.Dependentes
    var CEP = req.body.CEP
    CEP = CEP.replace(/[^\d]+/g,'')
    console.log(`https://viacep.com.br/ws/${CEP}/json`)
    fetch('https://google.com')
    .then(res => res.text())
    .then(text => console.log(text))
  /*   fetch(`https://viacep.com.br/ws/${CEP}/json`).then(response => console.log(response)) */
    if(req.body.fullname != '')
        resp.send("Nome: " + req.body.fullname + "<br> Endereço: " + req.body.CEP + "<br> Renda per capita: " + Percapita.toFixed(2) )
    else
        resp.send( "Endereço: " + req.body.CEP + "<br> Renda per capita: " + Percapita.toFixed(2)) 
})
app.listen(3003) 