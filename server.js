const express = require('express')
const app = express()
var dotenv = require('dotenv').config({path: 'private.env'})
var cors = require('cors');
const path = require('path');
const sendmail = require('sendmail')({
    logger: {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
      },
      devPort: false, // Default: False
      devHost: 'localhost', // Default: localhost
      smtpPort: 25, // Default: 25
      smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
});



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
    },(err , reply)=>{
        console.log(err && err.stack);
        console.dir(reply);
    })
})
app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/portfolio-angular/index.html'));
    });

app.listen(process.env.PORT || 8080)
