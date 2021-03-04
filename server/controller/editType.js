

module.exports = (req,res) => {
    let typeId = req.body.typeId;
    delete req.body.typeId;
    api.updateData('Type',req.body,{
        typeId,
        remove:0
    }).then(result => {
        res.send({msg:'编辑商品类型成功',status:1090,data:result});
    }).catch(err => {
        res.send({msg:'编辑商品类型失败',status:1091});

    })
}

