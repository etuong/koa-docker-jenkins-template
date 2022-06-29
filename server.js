const Koa = require('koa');
const Router = require('koa-router');
const koaStatic = require('koa-static');
const bodyParser = require('koa-bodyparser');

const PORT = process.env.PORT || 1234;

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  const name = ctx.query.name || 'stranger';
  ctx.set('Content-Type', 'text/html')
  ctx.status = 200;
  ctx.body = `<h1>Good bye ${name}!</h1>`;
});

router.get('/happy', async ctx => {
  ctx.set('Content-Type', 'text/html')
  ctx.status = 200;
  ctx.body = `<h1 style="color:red;">I am such a happy dog, woof!</h1>`;
});

router.get('/secret', async ctx => {
  ctx.redirect('test.html')
})

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(koaStatic('./pages'));

const server = app.listen(PORT, '0.0.0.0', () => console.log(`listening on http://localhost:${PORT}...`));

module.exports = server;