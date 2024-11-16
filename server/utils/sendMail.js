import nodemailer from "nodemailer";
import fs from "fs";

//User Registration Welcome Email
export const sendWelcomeMailToUser = async (email) => {
  // const emailTemplatePath = 
  // const emailTemplatePath = path.join(__dirname, 'welcomeEmailTemplate.html');
  const emailTemplate = fs.readFileSync('./utils/welcomeEmailTemplate.html', 'utf-8');

  // console.log(emailTemplatePath);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Welcome to HisaabKitaab",
    html: emailTemplate,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return true;
  
};

