// 引入模块
const Router = require('koa-router');
// const file = require('file');
const fs = require('fs');
const path = require('path');
// 创建路由
var router = new Router();

router.post('/', (ctx, next) => {

    //获取前端传过来的数据
    // let { a } = ctx.request.body;
    // const file = ctx.request;

    // // ctx.body = file;
    // const reader = fs.createReadStream(file.path);
    // // 修改文件的名称
    // var myDate = new Date();
    // var newFilename = myDate.getTime() + '.' + file.name;
    // var targetPath = path.join('./uploads') + `/${newFilename}`;
    // //创建可写流
    // const upStream = fs.createWriteStream(targetPath);
    // // 可读流通过管道写入可写流
    // reader.pipe(upStream);
    //返回保存的路径
    // return ctx.body = { code: 200, data: { url: 'http://' + ctx.headers.host + '/uploads/' + newFilename } };
    // ctx.body = { code: 200, data: { url: 'http://' + '/uploads/' + newFilename } }
    ctx.body = ctx.request.files;
});

module.exports = router;