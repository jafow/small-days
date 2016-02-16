const express = require('express');
const app = express();
const eventController = require('./controllers/eventController');

app.get('/events', eventController.getEvents);

app.listen(3300, () => {
	console.log('listening on port 3300');
});

module.exports = app
