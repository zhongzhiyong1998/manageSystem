

module.exports = (req,res) => {
    
    res.send({msg:'修改商品信息成功',status:1230});
    //01-只有商品基础数据
    //02-只有商品类型
    //03-只有图片
    //

    //更新商品数据
    function updateProduct(){
        api.transactionData(async t => {
            //t：事务处理对象
            //判断是否存在类型
            if(typeId){
                delete req.body.typeId;
                await api.updateData('ProdutType',{
                    typeId
                },{
                    proId
                })    
            }
             //判断是否存在商品基础数据
             if(JSON.stringify(req.body) != '{}'){
                await api.updateData('Product',req.body,{
                    proId
                })
            }
        }).then(() => {
            res.send({msg:'编辑商品成功',status:1230});
        }).catch(() => {
            res.send({msg:'编辑商品失败',status:1231});
        })
    }

    let proId = req.body.proId;
    delete req.body.proId;
    let typeId = req.body.typeId;
    //获取图片信息
    let imgName = ['img','detailImg'];
    let imgs = [];
    let imgFlag = [];
    imgName.forEach(v => {
        if(req.body[v]){
            //处理图片上传
            imgs.push(utils.uploadImg(req.body[v],req.body[v + 'Type']));
            // 保存图片标记（上传一张图片时，是小图片还是大图片）
            imgFlag.push(v);
            delete req.body[v + 'Type'];
        }
    })
    let keys = Object.keys(imgs);
    if(keys.length == 0){
        updateProduct()
    }else {
        //先上传图片，待上传图片完毕后，判断是否存在商品类型，判断是否存在商品基础数据
        Promise.all(imgs).then(result => {
            imgFlag.forEach((v,i) => {
                req.body[v] = result[i];
            })
            updateProduct()
        })

    }
    
}

