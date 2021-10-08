const express = require("express");
const logger = require("morgan");
const path = require('path');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/stats', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/stats.html'))
);

app.get('/exercise', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/exercise.html'))
);

app.use(require("./routes/api"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnessTracker_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});