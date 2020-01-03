const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/classic/latest', (ctx, next)=>{
    console.log("router.")
    ctx.body = {key: 'classic router'};
})

app.use(router.routes());

app.listen(3000, '192.168.16.116');
