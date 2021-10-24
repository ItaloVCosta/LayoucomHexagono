const express = require('express')
const app= express()
const bodyParser= require('body-parser')
const fetch = require('cross-fetch')
const { response } = require('express')
app.use(bodyParser.urlencoded({extended: true}))


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
            .then(data => 
                
                    resp.send("Nome"  + "<br>CEP: " + data.cep +"<br> Cidade: "+ data.localidade + "<br> Bairro: " +data.bairro +  "<br> Rua: " + data.logradouro +"<br> Renda per capuita:")
                )
        })

/*     if(req.body.fullname != '')
        resp.send("Nome: " + req.body.fullname + "<br> Endereço: " + req.body.CEP + "<br> Renda per capita: " + Percapita.toFixed(2) )
    else
        resp.send("CEP: " + cep +"<br> Cidade: "+ data.localidade + "<br> Bairro: " +data.bairro +  "<br> Endereço: " + data.logradouro + "<br> Renda per capita: " + Percapita.toFixed(2))
    */
   })
app.listen(3003) 