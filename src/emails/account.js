const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danielsarcor@gmail.com',
    subject: 'Thanks from joining in!',
    text: `Hey ${name}! Thanks for joining us.`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danielsarcor@gmail.com',
    subject: 'Sorry to see you go.',
    text: `${name} tell us what you'll improve in our service`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}