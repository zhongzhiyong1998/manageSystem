//用户模型

//导入sequelize
const {DataTypes,Model} = require('sequelize');

//创建ProductType模型并且继承Model基类，
class ProductType extends Model {}

//定义模型字段
ProductType.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表ID'
    },
    typeId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'类型id'
    },
    proId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        unique:true,
        comment:'商品id'
    },
},{
    //将模型映射到数据库中
    sequelize,
    //表名
    tableName:'producttype'
})

//同步到mysql中
ProductType.sync({force:false});

//导出
module.exports = ProductType;