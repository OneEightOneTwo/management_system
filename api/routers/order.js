// 引入模块
const Router = require('koa-router');
const db = require('../db');
// 创建路由
var router = new Router();

router.post('/', async (ctx, next) => {
    //获取前端传过来的数据
    let { m } = ctx.request.body;

    if (m == 'findPortion') {
        let { table, query, page, num } = ctx.request.body;
        let res = await db.findRestrict(table, query, page, num);
        // ctx.body = ctx.request.body;
        ctx.body = res;
    }
    if (m == 'del') {
        let { table, query } = ctx.request.body;
        let res = await db.del(table, { 'ordernum': query * 1 });
        ctx.body = res;
    }
    // if (m == 'find') {
    //     let { table, query } = ctx.request.body;
    //     let queryarr = query;
    //     let arr1 = [];//赋值条件
    //     for (let i = 0; i < queryarr.length; i++) {
    //         //判断数值类型
    //         let str = query[i];
    //         let arr = str.split(':');//让字符串以‘:’分隔成数组
    //         attr1 = arr[0];
    //         attr2 = arr[1];
    //         if (attr1 == 'start') {
    //             arr1.push({ 'order_time': { $gt: attr2 * 1 } });
    //         }
    //         if (attr1 == 'end') {
    //             arr1.push({ 'order_time': { $lt: attr2 * 1 } });
    //         }
    //         if (attr1 != 'start' && attr1 != 'end') {
    //             arr1.push({ attr1: attr2 });
    //         }
    //     }
    //     let res = await db.find(table, { 'goodsnum': 3 });
    //     ctx.body = arr1;
    // }


});

module.exports = router;