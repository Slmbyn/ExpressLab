// Load Express Framework
const express = require('express');
const path = require('path');

// require() the database (students)
const studentDb = require('./database/student-db')

// Create express app
const app = express();

// configure the app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the root route and other routes
app.get('/', function(request, response) {
    response.send('<h1>Hello Express!</h1>');
});

app.get('/students', function(req, res) {
    const students = studentDb.getAll();
    res.render('students/index', { students });
})

// tell the app to listen on a port
app.listen(8080, function() {
    console.log('listening on port 8080')
})