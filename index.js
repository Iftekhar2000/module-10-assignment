const express = require('express');
const mongoose = require('mongoose');
const jwt = require('./src/middlewares/jwt');
const Product = require('./src/models/products');

const app = express();

const authenticate = require('./authenticate');

readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)));







app.use(authenticate);


app.get('/protected', (req, res) => {
  const userId = req.userId;

  res.json({ message: 'Access granted to protected route', userId });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
