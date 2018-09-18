const path = require('path'); // Usually moved to the start of file
var nodemailer = require('nodemailer')
require('dotenv').config()
// const xoauth2 = require('xoauth2')
const express = require('express')
const app = express()
const port = 3006

app.use(express.static(`${__dirname}/../build`))

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


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
// nodemailer.createTestAccount((err, account) => {
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//           user: account.user, // generated ethereal user
//           pass: account.pass // generated ethereal password
//       }
//   });

//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: '"Fred Foo 👻" <foo@example.com>', // sender address
//       to: 'bar@example.com, baz@example.com', // list of receivers
//       subject: 'Hello ✔', // Subject line
//       text: 'Hello world?', // plain text body
//       html: '<b>Hello world?</b>' // html body
//   };

//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);
//       // Preview only available when sending through an Ethereal account
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

//       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
//       // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//   });
// });