require("babel-register")({
  ignore: false
});
require('./server.babel');
'use strict';
const config = require(./config);
const SMTPServer = require('smtp-server').SMTPServer;
)
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aisinvestigatores@gmail.com',
        pass: 'Temporary123'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Fred Foos" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
