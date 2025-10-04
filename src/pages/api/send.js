// import express from "express";
// import nodemailer from "nodemailer";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// // API route for sending email
// app.post("/send", async (req, res) => {
//   const { name, email, phone, message } = req.body;

//   try {
//     // Configure transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.PASSWORD,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email,
//       to: process.env.EMAIL_TO,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.status(200).json({ success: true, message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Email failed to send" });
//   }
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    // Configure transporter with Gmail + App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password, not normal password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender should be your email
      to: process.env.EMAIL_TO, // your destination email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Email failed to send" });
  }
}
