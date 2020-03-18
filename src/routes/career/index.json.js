import career from './_career.js';

const contents = JSON.stringify(career);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}