// 引入模块
const Router = require('koa-router');
const db = require('../db');

// 创建路由
var router = new Router();

router.post('/', async (ctx, next) => {
    //获取前端传过来的数据
    let {
        table,
        m,
        goodsnum,
        goodsname,
        goodsintro,
        price,
        express,
        store,
        repertory } = ctx.request.body;

    // ctx.body = ;
    if (m == 'insert') {
        let find = await db.find(table, { 'goodsnum': goodsnum });
        if (find.length <= 0) {
            let res = await db.insert(table, {
                'goodsnum': goodsnum,
                'goodsname': goodsname,
                'goodsintro': goodsintro,
                'price': price,
                'express': express,
                'store': store,
                'repertory': repertory
            });
            ctx.body = '添加成功';
        } else {
            ctx.body = '不能重复添加';
        }
    }
    if (m == 'findRestrict') {
        let { table, query, page, num } = ctx.request.body;
        let res = await db.findRestrict(table, query, page, num);
        ctx.body = res;
    }
    if (m == 'del') {
        let { table, query } = ctx.request.body;
        let res = await db.del(table, { 'goodsnum': query * 1 });
        ctx.body = res;
    }


});

module.exports = router;