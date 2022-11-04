//DEPENDENCIES
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

//Express App
const app = express();
const PORT =  process.env.PORT || 3001;

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(Express.static(path.join(__dirname, 'public')));
//Route setup
app.use(require('./controllers/dish-routes'));

//Starts server
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
})
