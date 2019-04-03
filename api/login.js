// 引入模块
const Router = require('koa-router');

// 创建路由
var router = new Router();

router.post('/', (ctx, next) => {
    ctx.body = ctx.request.body;
});

module.exports = router;