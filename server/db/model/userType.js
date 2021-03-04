//用户模型

//导入sequelize
const {DataTypes,Model} = require('sequelize');

//创建UserType模型并且继承Model基类，
class UserType extends Model {}

//定义模型字段
UserType.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        comment:'表ID'
    },
    userId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'用户id'
    },
    typeId:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        unique:true,
        comment:'类型id'
    },
},{
    //将模型映射到数据库中
    sequelize,
    //表名
    tableName:'usertype'
})

//同步到mysql中
UserType.sync({force:false});

//导出
module.exports = UserType;