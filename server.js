//DEPENDENCIES
const express = require('express');

const path = require('path');
//Import Express Session
const session = require('express-session')
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphbs.create({});


const sequelize = require('./config/connection');



//Express App
const app = express();
let PORT =  process.env.PORT || 3001;
const controllers = require("./controllers");
const api = require("./controllers/api");

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
    resave: false, 
    saveUninitializaed: false,
    store: new SequelizeStore({
        db: sequelize
    }),
};
app.use(session(sess));
const hbs = exphbs.create();
// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);
app.use(api);

//Connect to database before starting express.js server
//Starts server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});


