const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const { connect } = require('./config/dbConfig');
const router = require('./routes/index');

const port = 5000;

app.use(cors());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running, you are on the root route');
});
app.use('/api', router);
connect();
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
