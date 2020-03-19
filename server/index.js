const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const api = require('./api');

const app = new Koa();
app.use(bodyParser());
app.use(cors());

const router = new Router();

router
	.use(bodyParser())
	.get('/streams', api.getAllStreams)

app
	.use(router.routes())
	.use(router.allowedMethods())
	.listen(8080, () =>
		console.log('Server listening on port 8080')
	);
