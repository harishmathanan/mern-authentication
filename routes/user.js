const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Config = require('../config');

/* -----------------------------------------------------------------------------*/
// User registration
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Validation - required fields
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are requires.' });
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hash
    });

    const user = await newUser.save();
    const token = await jwt.sign({ id: user.id }, Config.JWT_SECRET, { expiresIn: '1h' });

    return res.cookie('token', token).sendStatus(200);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error.' });
  }
});
/* -----------------------------------------------------------------------------*/


/* -----------------------------------------------------------------------------*/
// User login
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  // Validation - required fields
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields required.' });
  }

  try {
    // Validation - user doesn't exist
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User does not exist.' });
    }

    // Validation - invalid credentials
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = await jwt.sign({ id: user.id }, Config.JWT_SECRET, { expiresIn: '1h' });
    return res.cookie('token', token).sendStatus(200);

  } catch (error) {
    return res.status(500).json({ message: 'Server error.' });
  }
});
/* -----------------------------------------------------------------------------*/


/* -----------------------------------------------------------------------------*/
router.get('/signout', (req, res) => {
  try {
    return res.clearCookie('token').sendStatus(200);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error.' });
  }
});
/* -----------------------------------------------------------------------------*/


/* -----------------------------------------------------------------------------*/
// User info
router.get('/', async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({ message: 'No token provided.' });
    }

    // verify if token is valid
    jwt.verify(token, Config.JWT_SECRET, async (error, decoded) => {
      if (error) {
        return res.status(400).json({ message: 'Invalid token.' });
      }

      const user = await User.findById(decoded.id);
      res.status(200).json({ user: { name: user.name, email: user.email } });
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error.' });
  }
});
/* -----------------------------------------------------------------------------*/

module.exports = router;
