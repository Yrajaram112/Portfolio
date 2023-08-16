import nodemailer from 'nodemailer';

const contactHandler = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Create an email message
  const mailOptions = {
    from: email,
    to: 'yrajaram112@gmail.com',
    subject: subject,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully '});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
};

export default contactHandler;
