var nodemailer = require('nodemailer')
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3006

app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../build`))

app.post('/api/message/', (req) => {
  const { name, email, subject, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
      user: 'rortiz.max@gmail.com',
      pass: process.env.PASS
    } ,
    tls:{
      rejectUnauthorized: false
    }
  });
  
  let HelperOptions = {
    from: name + email,
    to: 'rortiz.max@gmail.com',
    subject: subject,
    text: message
  }
  
  transporter.sendMail(HelperOptions, (error, info) => {
    if(error){
      return console.log(error)
    }
    console.log('Message sent')
    console.log(info)
  })
  
})

app.listen( port,() => {
  console.log('Server online at ' + port)
})