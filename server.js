const express = require('express')
const app = express()
const port = 3000
var dotenv = require('dotenv').config({path: 'private.env'})
var cors = require('cors');
const path = require('path');


var mailer = require('nodemailer');
var smtpTransport= require('nodemailer-smtp-transport')
var transport = mailer.createTransport(smtpTransport({
    service: "gmail",
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_MDP
    }}));
    app.use(express.json());
    app.use(cors());

app.use(express.static(__dirname + '/dist/portfolio-angular'));
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/portfolio-angular/index.html'));
    });
app.post('/contact',(req,res)=>{
    console.log(req.body)
    let mailuser = req.body.mail;
    let nameuser = req.body.name;
    let message = req.body.message;
    let mailContentMe={
        from: mailuser,
        to: 'guienjoris@gmail.com',
        subject: 'Contact Portfolio',
        html: `<p>Message:</p> ${message} 
        <p>De: </p> ${nameuser} 
        <p> Adresse email: </p> ${mailuser} `
    }
    transport.sendMail(mailContentMe,(error,res,req)=>{
        if(error){
            console.log("Erreur lors de l'envoi de l'email");
            console.log(error)
        }else{
            console.log('Email envoyé avec succès!')
        }
        transport.close();
    })
    let mailCopy = {
        from:'guienjoris@gmail.com',
        to: mailuser,
        subject: ' Copie du mail de contact Portfolio de Guien Joris',
        html: `<p>Ceci est un mail de copie:" </p>
        <p>Message:</p> ${message} 
        <p>De: </p> ${nameuser} 
        <p> Adresse email: </p> ${mailuser} <p>"</p>`
    }
    transport.sendMail(mailCopy,(error,res,req)=>{
        if(error){
            console.log("Erreur lors de l'envoi de l'email");
            console.log(error)
        }else{
            console.log('Email envoyé avec succès!')
        }
        transport.close();
    })
})

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port:${port} !`))
