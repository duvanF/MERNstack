const express = require('express');
const morgan = require('morgan');
const path = require('path')

const { mongoose } = require('./database');

const app = express();

//settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/tasks' ,require('./routes/task.routes'));

//statics files

// console.log(path.join(__dirname, 'public'));
// console.log(__dirname + '/public');
app.use(express.static(path.join(__dirname, 'public')));

//starting server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});