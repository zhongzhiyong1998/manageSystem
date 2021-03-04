

//根据typeId查询商品类型数据
module.exports = (req,res) => {

    api.findData('Type',{
        typeId:req.query.typeId,
        remove:0
    },['name','status']).then(result => {
        console.log(result);
        res.send({msg:'查询商品类型成功',status:1080,data:result})
    }).catch(err => {
        res.send({msg:'查询商品类型失败',status:1081})
    })
}