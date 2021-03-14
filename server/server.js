const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();


// Settings
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;


// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());


// Routes
app.route('/config').get((req, res) => {
  const config = JSON.parse(
    fs.readFileSync(__dirname + '/config/config.json', 'utf8')
  );

  try {
    return res.status(200).json(config);
  } catch (error) {
    if (error) {
      return res.status(500).json({
        message: error || 'Something wrong happened.'
      });
    }
  }
});

app.route('/config').put((req, res) => {
  try {
    fs.writeFileSync(
      __dirname + '/config/config.json',
      JSON.stringify(req.body)
    );

    res.status(201).json({ message: 'Config updated' })
  }
  catch (err) {
    res.status(500).json({ message: err || 'something went wrong' })
  }
});

router.route('/post').post((req, res) => {

});


app.listen(port, () => {
  console.log(`Server running up on port ${port}.`);
});