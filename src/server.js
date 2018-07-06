import express from 'express';

var app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});