const request = require('request');
const parser = require('xml-js');


class GoodreadsController {
	static getBooks(req, resp, next){
		const url = `https://www.goodreads.com/search/index.xml?key=mtABNCVqWBMWCFIiLz83iw&q=${req.params.query}`;
		request.get(url, (err, res, body) => {
			const xmlDoc = JSON.parse(parser.xml2json(body, { compact: true, spaces: 4 }));
			resp.send(xmlDoc.GoodreadsResponse.search.results.work);
		})
	}

	static getBookDetails(req, resp, next) {
		const url = `https://www.goodreads.com/book/show/${req.params.book_id}.xml?key=mtABNCVqWBMWCFIiLz83iw`;
		request.get(url, (err, res, body) => {
			const xmlDoc = JSON.parse(parser.xml2json(body, { compact: true, spaces: 4 }));
			resp.send(xmlDoc.GoodreadsResponse.book);
		})
	}

	static getAuthorDetails(req, resp, next) {
		const url = `https://www.goodreads.com/author/show/${req.params.author_id}.xml?key=mtABNCVqWBMWCFIiLz83iw`;
		request.get(url, (err, res, body) => {
			const xmlDoc = JSON.parse(parser.xml2json(body, { compact: true, spaces: 4 }));
			resp.send(xmlDoc.GoodreadsResponse.author);
		})
	}
}

module.exports = GoodreadsController
