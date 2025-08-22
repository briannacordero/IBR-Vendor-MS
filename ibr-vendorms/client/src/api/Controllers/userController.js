const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const User = require('../models/userModel');
const transporter = nodemailer.createTransport({
    auth: {
       user: process.env.EMAIL_USERNAME,
       pass: process.env.EMAIL_PASSWORD,
    },
});
exports.signup = async (req, res) => {
  console.log('Request Body:', req.body);
    const { email } = req.body
    // Check we have an email
    if (!email) {
       return res.status(422).send({ message: "Missing email." });
    }
    try{
       // Check if the email is in use
       const existingUser = await User.findOne({ email }).exec();
       // Step 1 - Create and save the user
       const user = await new User({
          _id: new mongoose.Types.ObjectId,
          email: email
       }).save();
       // Step 2 - Generate a verification token with the user's ID
       const verificationToken = user.generateVerificationToken();
       // Step 3 - Email the user a unique verification link
       const url = `http://localhost:3000/api/verify/${verificationToken}`
       transporter.sendMail({
         to: email,
         subject: 'Verify Account',
         html: `Click <a href = '${url}'>here</a> to confirm your email.`
       })
       return res.status(201).send({
         message: `Sent a verification email to ${email}`
       });
   } catch(err){
       return res.status(500).send(err);
   }
}