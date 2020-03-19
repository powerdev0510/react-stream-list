const models = require('./streamModels');

function getAllStreams (ctx, next) {
	ctx.body = models.findAllStreams();
}

module.exports = {
	getAllStreams
};
