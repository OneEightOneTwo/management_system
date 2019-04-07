// 引入模块
const Router = require('koa-router');
const koaBody = require('koa-body');

// 创建路由
var router = new Router();

router.use(koaBody({
    //支持formdata格式
    multipart: true,

    //文件支持
    formidable: {
        //指定保存路径
        uploadDir: './uploads',
        //保留文件扩展名
        keepExtensions: true,
        maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
    }

}));

// 引入页面路由
const loginRouter = require('./login');
const orderRouter = require('./order');
const uploadRouter = require('./upload');
const goodsRouter = require('./goods');

//数据格式化


// 创建路由接口
router.use('/login', loginRouter.routes());
router.use('/order', orderRouter.routes());
router.use('/upload', uploadRouter.routes());
router.use('/goods', goodsRouter.routes());

module.exports = router;

