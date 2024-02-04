
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Message from (${name})`,
        text: message,
      };

      await transport.sendMail(mailOptions);
      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
