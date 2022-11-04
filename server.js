//DEPENDENCIES
const express = require('express');
const path = require('path');
//Import Express Session
const session = require('express-session')
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const hbs = exphbs.create({});

const routes = require('./controllers');
const sequelize = require('./config/connection');



//Express App
const app = express();
const PORT =  process.env.PORT || 3001;
//Set up sessions
const sess = {
    secret: '',
    cookie: {},
    resave: false, 
    saveUninitializaed: false,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(Express.static(path.join(__dirname, 'public')));

//Route setup ///add route
app.use(require('./controllers/'));

//Connect to database before starting express.js server
//Starts server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
});


