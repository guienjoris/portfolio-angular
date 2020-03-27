const express = require('express')
const app = express()
var dotenv = require('dotenv').config({path: 'private.env'})
var cors = require('cors');
const path = require('path');


var mail = require('nodemailer').mail;
// var smtpTransport= require('nodemailer-smtp-transport')
// var transport = mailer.createTransport(smtpTransport({
//     service: "gmail",
//     auth:{
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_MDP
//     }}));
    app.use(express.json());
    app.use(cors());

app.use(express.static(__dirname + '/dist/portfolio-angular'));

app.post('/contact-post',(req,res)=>{
    let mailContentMe={
        from: req.body.mail,
        to: 'guienjoris@gmail.com',
        subject: 'Contact Portfolio',
        html: `<p>Message:</p> ${req.body.message} 
        <p>De: </p> ${req.body.name} 
        <p> Adresse email: </p> ${req.body.mail} `
    }
    mail(mailContentMe,(error,req,res)=>{
        if(error){
            console.log("Erreur lors de l'envoi de l'email");
            console.log(error)
            res.status(500).send({err:error})
        }else{
            console.log('Email envoyé avec succès!')
        }
    })
    let mailCopy = {
        from:'guienjoris@gmail.com',
        to: req.body.mail,
        subject: ' Copie du mail de contact Portfolio de Guien Joris',
        html: `<p>Ceci est un mail de copie:" </p>
        <p>Message:</p> ${req.body.message} 
        <p>De: </p> ${req.body.name} 
        <p> Adresse email: </p> ${req.body.mail} <p>"</p>`
    }
    mail(mailCopy,(error,req,res)=>{
        if(error){
            console.log("Erreur lors de l'envoi de l'email");
            console.log(error)
            res.status(500).send({err:error})
        }else{
            console.log('Email envoyé avec succès!')
        }
    })
})
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/portfolio-angular/index.html'));
    });

app.listen(process.env.PORT || 8080)
