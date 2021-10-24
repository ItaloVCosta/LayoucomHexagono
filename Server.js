const express = require('express')
const app= express()
const bodyParser= require('body-parser')
const fetch = require('cross-fetch')
const { response } = require('express')
app.use(bodyParser.urlencoded({extended: true}))


const showData = (resultado)=>{
            console.log(resultado.localidade)
         
}

app.post('/RetornoServer',(req,resp) => {
    console.log(req.body)
    let Renda =req.body.Renda
    const Percapita = Renda/req.body.Dependentes
    var CEP = req.body.CEP
    CEP = CEP.replace(/[^\d]+/g,'')
    const URL =`https://viacep.com.br/ws/${CEP}/json`
    console.log(URL)


    fetch(URL)
        .then(response =>{response.json()
            .then(data => showData(data))
        })
    if(req.body.fullname != '')
        resp.send("Nome: " + req.body.fullname + "<br> Endereço: " + req.body.CEP + "<br> Renda per capita: " + Percapita.toFixed(2) )
    else
        resp.send( "Endereço: " + req.body.CEP + "<br> Renda per capita: " + Percapita.toFixed(2)) 
})
app.listen(3003) 