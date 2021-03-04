

const {Op} = require('sequelize');

module.exports = (req,res) => {
    api.updateData('Product',{
        remove:1
    },{
        proId:{
            [Op.in]:req.body.proIds,
        }
    }).then(result => {
        res.send({msg:'删除商品成功',data:result,status:1210});
    }).catch(err => {
        res.send({msg:'删除商品失败',status:1211});
    })
}