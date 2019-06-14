const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Config = require('../config');

// User registration
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Validation - required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are requires.' });
  }
 
  let salt = await bcrypt.genSalt(10);
  let hash = await bcrypt.hash(salt, password);

  const newUser = new User({
    name,
    email,
    password: hash
  });

  try {
    const user = await newUser.save();
    const token = await jwt.sign({ id: user.id }, Config.JWT_SECRET, { expiresIn: '1h' });

    return res.cookie('token', token).sendStatus(200);

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Server error.' });
  }
});

// User login
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Validation - required fields
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields required.' });
  }

  // Validation - user doesn't exist
  let user = await User.find({ email });

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' });
  }

  // Validation - invalid credentials
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials.' });
  }

  try {
    let token = await jwt.sign({ id: user.id }, Config.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token).sendStatus(200);

  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Server error.' });
  }
});

module.exports = router;
