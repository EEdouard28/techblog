//DEPENDENCIES
const express = require("express");
const path = require("path");
const sequelize = require("./config/connection");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const controllers = require("./controllers");
const exphbs = require("express-handlebars");

// const hbs = exphbs.create({});

//Express App
const app = express();
let PORT = process.env.PORT || 3001;

// const api = require("./controllers/");

//Set up sessions
//stores the session data on the client in a cookie
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 86000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: true,
  saveUninitializaed: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// app.use(session(sess));
app.use(session({ secret: 'SESSION_SECRET', resave: true, saveUninitialized: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
// app.use(controllers);


const hbs = exphbs.create();
// Set Handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(require("./controllers/"));
//Connect to database before starting express.js server
//Starts server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
  );
});
