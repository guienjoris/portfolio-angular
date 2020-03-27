const express = require('express')
const app = express()
var dotenv = require('dotenv').config({path: 'private.env'})
var cors = require('cors');
const path = require('path');
const mail = require('nodemailer')
const transporter =  mail.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_MDP
    }
})


    app.use(express.json());
    app.use(cors());

app.use(express.static(__dirname + '/dist/portfolio-angular'));

app.post('/contact-post',(req,res)=>{
    var mailOptions={
        from: req.body.mail,
        to: `guienjoris@gmail.com, ${req.body.mail}`,
        subject: 'Contact Portfolio',
        html: `<p>Message: ${req.body.message}</p>  
        <p>De: ${req.body.name} </p>  
        <p> Adresse email:${req.body.mail} </p>  `
    }
    transporter.sendMail(mailOptions,(err , info)=>{
        if(error){
            return console.log(error)
        }
        console.log('Message envoyé', info.messageId)
    })
})
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/portfolio-angular/index.html'));
    });

app.listen(process.env.PORT || 8080)
