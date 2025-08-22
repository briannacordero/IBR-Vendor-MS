const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://briannacordero:testing123@verify-email.pnv1wcq.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define Mongoose schema and model for users
const userSchema = new mongoose.Schema({
  email: String,
  verificationCode: String,
  isVerified: { type: Boolean, default: false }
});
const User = mongoose.model('User', userSchema);

// Endpoint to request verification email
app.post('/api/send-verification-email', async (req, res) => {
  const { email } = req.body;
  // Generate a random verification code
  const verificationCode = Math.random().toString(36).substring(7);
  
  // Save the verification code to the user's document in the database
  try {
    await User.findOneAndUpdate({ email }, { verificationCode }, { upsert: true });
  } catch (error) {
    console.error('Error saving verification code to database:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  
  const transporter = nodemailer.createTransport({
    host: 'mail.wspis.com',
    port: 587, 
    secure: false, 
    auth: {
      user: 'brianna.cordero@wsp.com',
      pass: 'testing123'
    }
  });
  const mailOptions = {
    from: 'testEmail@interstatebridge.org',
    to: email,
    subject: 'Email Verification',
    text: `Your verification code is: ${verificationCode}`
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Verification email sent successfully' });
  } catch (error) {
    console.error('Error sending verification email:', error);
    res.status(500).json({ error: 'Failed to send verification email' });
  }
});

// Endpoint to verify email address with code
app.post('/api/verifyemail', async (req, res) => {
  const { email, verificationCode } = req.body;
  // Find the user by email and verification code
  const user = await User.findOne({ email, verificationCode });
  if (!user) {
    return res.status(400).json({ error: 'Invalid verification code' });
  }
  // Update user's verification status
  user.isVerified = true;
  await user.save();
  res.status(200).json({ message: 'Email verified successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
