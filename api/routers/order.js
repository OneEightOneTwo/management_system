// 引入模块
const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.post('/', async (ctx, next) => {
    //获取前端传过来的数据
    let { table, query, page, num } = ctx.request.body;
    let initial = await db.findRestrict(table, query, page, num);
    // ctx.body = ctx.request.body;
    ctx.body = initial;
});

module.exports = router;