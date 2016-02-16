const express = require('express');
const app = express();
const path = require('path');
const eventController = require('./controllers/eventController');

app.use(express.static(path.join(__dirname + './../')));

app.get('/', (req,res) => {
	res.sendFile('index.html');
});

app.get('/events', eventController.getEvents);

app.listen(3300, () => {
	console.log('listening on port 3300');
});

module.exports = app
