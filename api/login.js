// 引入模块
const Router = require('koa-router');

// 创建路由
var router = new Router();

router.post('/', (ctx, next) => {
    //获取前端传过来的数据
    ctx.body = ctx.request.body;
});

module.exports = router;