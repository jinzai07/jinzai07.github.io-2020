import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import url from 'url';

dotenv.config();

export const sendEmail = async (req, res, next) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const options = {
    from: email,
    to: process.env.GMAIL_EMAIL,
    subject: 'Contact me - Portfolio 2020',
    text: `Sent by - ${email} - ${message}`
  }

  try {
    const info = await transporter.sendMail(options);
    return res.redirect(url.format({
      pathname: '/contact',
      query: {
        message: 'success'
      }
    }));
  } catch(err) {
    console.error(err);
  }
}