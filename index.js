//NodeJS packages
const path = require('path');

//3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
const flash = require('connect-flash');

//My packages
const routes = require('./routes');
const User = require('./models/commerce/user');

const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://node_js:root@cluster0.hnqky.mongodb.net/shop?retryWrites=true&w=majority";

const app = express();

const corsOptions = {
  origin: "https://cse-341.herokuapp.com/",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

//Create options for mongoose
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4
};

const store = new MongoDBStore({
  uri: MONGODB_URL,
  collection: 'sessions'
});

const csrfProtection = csrf();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false })); // For parsing the body of a POST

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );

app.use(csrfProtection);
app.use(flash());

app.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

//Direct requests through the route files
app.use('/', routes);

//Listen with mongoose
mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });
