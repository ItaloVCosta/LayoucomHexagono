const express = require('express')
const app= express()
const bodyParser= require('body-parser')
const fetch = require('cross-fetch')
const { response } = require('express')

app.use(bodyParser.urlencoded({extended: true}))


app.post('/RetornoServer',(req,resp) => {

    const Renda =req.body.Renda
    const fullname= req.body.fullname
    const Percapita = Renda/req.body.Dependentes
    const CEP = req.body.CEP
    const CEPFormatado = CEP.replace(/[^\d]+/g,'')
    const urlCEP =`https://viacep.com.br/ws/${CEPFormatado}/json`
    let retorno =''
    if(fullname)
        retorno +=`Nome: ${fullname} <br>`

    fetch(urlCEP)
        .then(response =>{response.json()
            .then(data => 
                
                    resp.send(retorno +
                        "<CEP: " + data.cep +
                        "<br> Logradouro: " + data.logradouro +
                        "<br> Cidade: "+ data.localidade + 
                        "<br> Bairro: " +data.bairro +  
                        "<br> Estado:" + data.uf +
                        "<br> Renda per capita: R$" + Percapita.toFixed(2))
                )
        })
})


app.listen(3003) 