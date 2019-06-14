const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Config = require('./config');

const app = express();
const PORT = process.env.PORT || 5555;

const userRoutes = require('./routes/user');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Database
mongoose.connect(Config.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true })
.then(() => {
  console.log('Connected to MongoDb');
})
.catch((error) => {
  console.log(error);
  process.exit();
});

// Home
app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

// Routes
app.use('/api/user', userRoutes);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});
