// const express = require('express');
// const Router = require('./api');
// const app = express();

// //静态服务器
// app.use(express.static('./'));

// app.use('/api', Router);

// app.listen(1943, () => {
//     console.log('sever is running on http://localhost:1943');
// });

const Koa = require('koa');
const static = require('koa-static');

// 路由
const routers = require('./api/routers');

// 创建koa应用
const app = new Koa();


// 创建静态服务
app.use(static('./'));
app.use(routers.routes());


// 监听端口
app.listen(1943, () => {
    console.log('sever is running on http://localhost:1943');
});
