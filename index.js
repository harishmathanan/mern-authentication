const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 5555;

const userRoutes = require('./routes/user');

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Home
app.get('/', (req, res) => {
  res.status(200).send('MERN Authentication Example')
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
