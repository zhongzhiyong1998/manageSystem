//入口层

global.path = require('path');
global.__basename = __dirname;

//导入配置层
global.config = require(path.resolve(__basename,'config/config.js'));
//链接mysql，全局保存链接实例
global.sequelize = require(path.resolve(__basename,'db/connect.js'));
//导入所有模型
global.model = require(path.resolve(__basename,'db/model/model.js'));
//导入服务层
global.api = require(path.resolve(__basename,'service/api.js'));
//导入Utils
global.utils = require(path.resolve(__basename,'utils/utils.js'));

const express = require('express');

//导入body-parser处理请求体模块
const bodyParser = require('body-parser');
//导入中间件
const middleWare = require(path.resolve(__basename,'middleWare/intercept.js'));

//导入路由层
const routes = require(path.resolve(__basename,'routes/routes.js'));

let app = express();
//解析post请求体 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false ,limit:config.serverOptions.limitBody}));
//解析 application/json
app.use(bodyParser.json({limit:config.serverOptions.limitBody})); 

//设置静态目录 
app.use(config.staticBaseUrl.base,express.static(path.resolve(__basename,'upload')));

//加载中间件层
middleWare(app);


//加载路由接口
routes(app);

//
app.listen(config.serverOptions.port, () => {
    console.log(`start server ${config.serverOptions.port} sucessfully`);
})


