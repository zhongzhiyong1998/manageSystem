//用户模型

//导入sequelize
const {DataTypes,Model} = require('sequelize');

//创建Code模型并且继承Model基类，
class Code extends Model {}

//定义模型字段
Code.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表ID'
    },
    codeId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        unique:true,
        comment:'验证码id'
    },
    email:{
        type:DataTypes.STRING(40),
        allowNull:false,
        defaultValue:'',
        comment:'邮箱'
    },
    code:{
        type:DataTypes.STRING(12),
        allowNull:false,
        defaultValue:'',
        comment:'验证码'
    },
},{
    //将模型映射到数据库中
    sequelize,
    //表名
    tableName:'code'
})

//同步到mysql中
// Code.sync({force:true});
Code.sync({force:false});

//导出
module.exports = Code;