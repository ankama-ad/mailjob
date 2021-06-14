
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: {
        user: 'anudeep@powerbiaxes.onmicrosoft.com',
        pass: 'Sparrow@987'
    }
});

var mailOptions = {
  from: 'anudeep@powerbiaxes.onmicrosoft.com',
  to: 'ajay@powerbiaxes.onmicrosoft.com',
  subject: 'Testing Azure Web app functionality',
  text: 'That was easy!'
};

const sendMail = async (req, res) => {
   
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send(info.response)
        }
      });
}

module.exports = sendMail

