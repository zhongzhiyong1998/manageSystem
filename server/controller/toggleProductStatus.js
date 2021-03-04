

//切换商品状态
module.exports = (req,res) => {
    //根据userId和proId查询类型是否存在
    api.findData('UserProduct',{
        userId:req.userId,
        proId:req.body.proId
    }).then( r => {
        if(r.length > 0){
            //根据typeId修改status
            api.updateData('Product',{
                status:req.body.status
            },{
                proId:req.body.proId
            }).then(result => {
                res.send({msg:'切换商品状态成功',status:1200,data:{
                    result,
                    status:req.body.status
                }});
            }).catch(err => {
                res.send({msg:'切换商品状态失败',status:1201});
            })
        }else {
            res.send({msg:'切换商品类型失败',status:1201});
        }
    }).catch( e => {
        res.send({msg:'切换商品类型失败',status:1201});
        
    })


    
}

