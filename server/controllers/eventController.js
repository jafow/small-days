'use strict';
const cheerio = require('cheerio');
const request = require('request');
const eventsURL = 'http://redtri.com/events/los-angeles/?utm_source=main-nav&utm_medium=events-LA&utm_campaign=main-nav-events-LA';
const craftsURL = 'http://handsonaswegrow.com/30-creative-toddler-craft-art-projects/';

const eventController = {};

const trimInput = (str) => {
	return str.trim();
};

eventController.getEvents = (req,res) => {
	request(eventsURL, (err, response, body) => {
		const $ = cheerio.load(body);
		const resultArray = [];

		if (err) throw new Error('Error on GET to eventsURL', err);

		const $eventBody = $('.event-body');

		$eventBody.each((index, el) => {
			let $el = $(el);
			let returnedEventObj = {};
			returnedEventObj.what = $el.children('h2').text();
			returnedEventObj.where = trimInput($el.children('.where').children('.event-content').text());
			returnedEventObj.when = trimInput($el.children('.when').children('.event-content').text());
			returnedEventObj.cost = $el.children('.cost').children('.event-content').text() || '$0';

			resultArray.push(returnedEventObj);
		});

		res.json(resultArray);
	});
};

eventController.getCrafts = (req,res) => {
	request(craftsURL, (err, response, body) => {
		const $ = cheerio.load(body);
		const resultObjects = [];

		if (err) throw new Error('Error on GET to craftsURL ', err);

		const $craftIdea = $('li').children('a');

		$craftIdea.each((index, idea) => {
			let $idea = $(idea);
			let returnedCraftObj = {};
			if (!$idea.attr('title')) return;
			returnedCraftObj.title = $idea.attr('title');
			returnedCraftObj.description = $idea.parent('li').text();
			returnedCraftObj.link = $idea.attr('href');
			resultObjects.push(returnedCraftObj);
		});

		let filterEmpty = resultObjects.filter((e) => {
			if (e.title !== 'undefined') {
				return e;
			}
		}).filter((goodTitles) => {
			if (goodTitles.title.slice(0, 17) !== 'Permanent Link to') {
				return goodTitles;
			}
		});
		res.json(filterEmpty);
	});

};

module.exports = eventController;
