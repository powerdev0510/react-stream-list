const streams = require('./streamList.json');

let data = { ...streams };

function findAllStreams () {
	return data;
}

module.exports = {
	findAllStreams
};
