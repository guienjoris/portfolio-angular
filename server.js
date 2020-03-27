const express = require('express')
const app = express()
var dotenv = require('dotenv').config({path: 'private.env'})
var cors = require('cors');
const path = require('path');
const sendmail = require('sendmail')();



    app.use(express.json());
    app.use(cors());

app.use(express.static(__dirname + '/dist/portfolio-angular'));

app.post('/contact-post',(req,res)=>{
    sendmail({
        from: req.body.mail,
        to: `guienjoris@gmail.com, ${req.body.mail}`,
        subject: 'Contact Portfolio',
        html: `<p>Message: ${req.body.message}</p>  
        <p>De: ${req.body.name} </p>  
        <p> Adresse email:${req.body.mail} </p>  `
    },(error,req,res)=>{
        if(error){
            console.log("Erreur lors de l'envoi de l'email");
            console.log(error)
        }else{
            console.log('Email envoyé avec succès!')
        }
    })
})
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/portfolio-angular/index.html'));
    });

app.listen(process.env.PORT || 8080)
