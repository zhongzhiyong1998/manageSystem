

const {Op} = require('sequelize');

module.exports = (req,res) => {

    api.updateData('Type',{
        remove:1
    },{
        typeId:{
            [Op.in]:req.body.typeIds,
        }
    }).then(result => {
        res.send({msg:'删除商品类型成功',data:result,status:1100});
    }).catch(err => {
        res.send({msg:'删除商品失败',status:1101});
    })
}