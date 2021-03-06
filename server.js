const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded using bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'pug');
app.set('views', './views');

let cors = require('cors') // might want to delete this later
//app.use(cors()) // Use this after the variable declaration

const mysql = require('mysql');

//TEST DATABASE
const sql = mysql.createConnection({
    host: '45.55.136.114',
    user: 'lostfoundF2021',
    password: 'l0stIs0k!',
    database: 'lostfoundF2021'
});

// connect to database
sql.connect();

module.exports = app;

let appRoutes = require('./routes/minorLogRoutes'); //importing route
appRoutes(app); //register the route (Send app to the appRoutes file)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log('API server started on: ' + port);
});