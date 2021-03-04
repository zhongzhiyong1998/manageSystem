//路由层

//导入控制器层
const controller = require(path.resolve(__basename,'controller/controller.js'));

module.exports = app => {
    //注册
    app.post('/register',controller.register);

    //发送验证码
    app.post('/sendValidcode',controller.sendValidcode);

    //登录
    app.post('/login',controller.login);

    //创建商品类型
    app.post('/createType',controller.createType);

    //查询商品类型列表
    app.get('/typeList',controller.findTypeList);

    //更改商品类型状态
    app.post("/typeStatus",controller.toggleTypeStatus);

    //根据typeId查询商品类型数据
    app.get('/typeDataByTypeId',controller.findTypeByTypeId);

    //编辑商品类型
    app.post('/editType',controller.editType);

    //删除商品类型
    app.post('/removeType',controller.removeType);

    //删除商品类型
    app.get('/typeCount',controller.findTypeCount);

    //查询用户信息
    app.get('/userInfo',controller.findUserInfo);

    //发布商品
    app.post('/postProduct',controller.postProduct);

    //获取商品类型
    app.get('/typeData',controller.findTypeData);

    //获取商品列表信息
    app.get('/productList',controller.findProductData);

    //获取商品总数量
    app.get('/productCount',controller.findProductCount);

    //更改商品状态
    app.post("/productStatus",controller.toggleProductStatus);

    //删除商品
    app.post("/removeProduct",controller.removeProduct);

    //根据proId查询商品类型数据
    app.get('/proDataByProId',controller.findProductByProId);

    //修改商品信息
    app.post('/editProduct',controller.editProduct);

}