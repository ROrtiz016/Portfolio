const path = require('path'); // Usually moved to the start of file
var nodemailer = require('nodemailer')
require('dotenv').config()
// const xoauth2 = require('xoauth2')
const express = require('express')
const app = express()
const port = 3006

app.use(express.static(`${__dirname}/../build`))

app.post('/api/message/:name/:email/:subject/:message/', function(res, req){
  const { name, email, subject, message } = req.params;
})

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
  from: '"Ruben Ortiz" <rortiz.max@gmail.com',
  to: 'rortiz.max@gmail.com',
  subject: 'Hello World',
  text: 'Awesome Work'
}

transporter.sendMail(HelperOptions, (error, info) => {
  if(error){
    return console.log(error)
  }
    console.log('Message sent')
    console.log(info)
  
})


app.listen( port,() => {
  console.log('Server online at ' + port)
})