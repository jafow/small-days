'use strict';
const cheerio = require('cheerio');
const request = require('request');
const URL = 'http://redtri.com/events/los-angeles/?utm_source=main-nav&utm_medium=events-LA&utm_campaign=main-nav-events-LA';


const eventController = {};

eventController.getEvents = (req,res) => {
	request(URL, (err, response, body) => {
		const $ = cheerio.load(body);
		const resultArray = [];

		if (err) throw new Error('Error on GET ', err);

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

const trimInput = (str) => {
	return str.trim();
};

module.exports = eventController;
