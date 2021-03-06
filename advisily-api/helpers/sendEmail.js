const nodemailer = require("nodemailer");
const config = require("config");

const sendEmail = async ({ to, subject, html, from = config.emailFrom }) => {
  const transporter = nodemailer.createTransport(config.gmailSmtpOptions);

  return new Promise((resolve, reject) => {
    transporter
      .sendMail({ from, to, subject, html })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
  // try {
  //   return await
  // } catch (err) {
  //   console.log("Error while sending email:", err);
  //   throw "Error sending an email";
  // }
};

module.exports = sendEmail;
