const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
    console.log("一");
    next();
    console.log("二");
});

app.use((ctx, next) => {
    console.log("三");
    next();
    console.log("四");
});

app.listen(3000, '192.168.16.116');
