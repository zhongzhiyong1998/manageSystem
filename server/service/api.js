//服务层

const {QueryTypes} = require('sequelize');

class API {
    //写入数据
    createData(modelName,values,t){
        //modelName:模型名称
        //values:插入的数据
        //t:事务处理对象
        if(t){
            return model[modelName].create(values,{transaction:t});
        }
        return model[modelName].create(values);
    }

    //查询数据
    findData(modelName,condition,attributes){
        return model[modelName].findAll({ 
            where:condition,
            attributes
        })
    }

    //事务处理
    transactionData(fn){
        return sequelize.transaction(fn);
    }

    //原始查询
    queryData(sql,type,replacements){
        // sql sql语句
        // type sql操作类型
        // replacements sql替换值
        return sequelize.query(sql,{
            type:QueryTypes[type],
            //替换值
            replacements
        })
    }

    //更新数据
    updateData(modelName,values,condition){
        //modelName:模型名称
        //values 修改的数据
        //condition 查询条件
        return model[modelName].update(values,{
            where:condition
        })
    }

    //
}


module.exports = new API();

