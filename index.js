//NodeJS packages
const path = require('path');

//3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//My packages
const routes = require('./routes');
const User = require('./models/commerce/user');

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const app = express();

const corsOptions = {
  origin: "https://cse-341.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://node_js:root@cluster0.hnqky.mongodb.net/shop?retryWrites=true&w=majority";


app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(bodyParser.urlencoded({ extended: false })) // For parsing the body of a POST
  .use((req, res, next) => {
    User.findById('5f826ff7ffdf744444732a59')
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  })
  .use('/', routes)



mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Adam',
          email: 'adam@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });

    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });

