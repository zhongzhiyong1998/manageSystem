//控制器层


//收编所有控制器
const sendValidcode = require(path.resolve(__basename,'controller/sendValidcode.js')); 
const register = require(path.resolve(__basename,'controller/register.js')); 
const login = require(path.resolve(__basename,'controller/login.js')); 
const createType = require(path.resolve(__basename,'controller/createType.js')); 
const findTypeList = require(path.resolve(__basename,'controller/findTypeList.js')); 
const toggleTypeStatus = require(path.resolve(__basename,'controller/toggleTypeStatus.js')); 
const findTypeByTypeId = require(path.resolve(__basename,'controller/findTypeByTypeId.js')); 
const editType = require(path.resolve(__basename,'controller/editType.js')); 
const removeType = require(path.resolve(__basename,'controller/removeType.js')); 
const findTypeCount = require(path.resolve(__basename,'controller/findTypeCount.js')); 
const findUserInfo = require(path.resolve(__basename,'controller/findUserInfo.js')); 
const postProduct = require(path.resolve(__basename,'controller/postProduct.js')); 
const findTypeData = require(path.resolve(__basename,'controller/findTypeData.js')); 
const findProductData = require(path.resolve(__basename,'controller/productList.js')); 
const findProductCount = require(path.resolve(__basename,'controller/findProductCount.js')); 
const toggleProductStatus = require(path.resolve(__basename,'controller/toggleProductStatus.js')); 
const removeProduct = require(path.resolve(__basename,'controller/removeProduct.js')); 
const findProductByProId = require(path.resolve(__basename,'controller/findProductByproId.js')); 
const editProduct = require(path.resolve(__basename,'controller/editProduct.js')); 


module.exports = {
    //注册
    register,

    //发送验证码
    sendValidcode,

    //登录
    login,

    //创建商品类型
    createType,

    //查询商品类型列表
    findTypeList,

    //更改商品状态
    toggleTypeStatus,

    //根据typeId查询商品类型数据
    findTypeByTypeId,

    //编辑商品类型
    editType,

    //删除商品类型
    removeType,

    //查询商品类型数量
    findTypeCount,

    //查询用户信息
    findUserInfo,

    //发布商品
    postProduct,

    //查找商品类型
    findTypeData,

    //查看商品列表
    findProductData,

    //查看商品总数量
    findProductCount,

    //切换商品状态
    toggleProductStatus,

    //删除商品
    removeProduct,

    //根据商品ID查询
    findProductByProId,

    //编辑商品
    editProduct,


}
