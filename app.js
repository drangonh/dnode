//启动文件（入口文件）
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');   //上下文解析
const static = require('koa-static');    //静态资源服务
const path = require('path');
const cors = require('koa-cors');      //跨域访问组件
const registerRouter = require('./routers/index');
const koaBody = require('koa-body'); //上传文件
const app = new Koa();
require('./model/index');
// 配置静态资源文件
const staticPath = './static';
app.use(static(
    path.join(__dirname, staticPath)
));
app.use(koaBody({multipart: true}));
app.use(async (ctx) => {
    cors();
}); // 允许跨域访问
app.use(registerRouter());
app.listen(3000);
console.log("启动成功 koa is listening in 3000");
