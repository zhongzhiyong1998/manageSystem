//用户模型

//导入sequelize
const {DataTypes,Model} = require('sequelize');

//创建User模型并且继承Model基类，
class User extends Model {}

//定义模型字段
User.init({
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
        unique:true,
        comment:'用户id'
    },
    email:{
        type:DataTypes.STRING(40),
        allowNull:false,
        defaultValue:'',
        comment:'邮箱'
    },
    password:{
        type:DataTypes.STRING(32),
        allowNull:false,
        defaultValue:'',
        comment:'密码'
    },
    nickName:{
        type:DataTypes.STRING(30),
        allowNull:false,
        defaultValue:'',
        comment:'昵称'
    },
    phone:{
        type:DataTypes.STRING(11),
        allowNull:true,
        defaultValue:null,
        comment:'手机号'
    },
    sex:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:2,
        comment:'性别0女1男2未知'
    },
    avatar:{
        type:DataTypes.STRING(36),
        allowNull:false,
        defaultValue:"default.jpg",
        comment:'用户头像'
    }
},{
    //将模型映射到数据库中
    sequelize,
    //表名
    tableName:'user'
})

//同步到mysql中
User.sync({force:false});

//导出
module.exports = User;