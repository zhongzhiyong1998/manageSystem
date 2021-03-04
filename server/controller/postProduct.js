


module.exports = (req,res) => {
    //等待所有图片上传完毕，再执行其他sql语句将商品数据写入数据库
    //将商品基础数据写入商品数据表中
    //将商品和类型写入商品、类型关系表
    //将商品和用户写入商品、用户关系表

    let imgPromise = [
        utils.uploadImg(req.body.img,req.body.imgType),
        utils.uploadImg(req.body.detailImg,req.body.detailImgType)
    ];
    //所有图片都上传完毕后
    Promise.all(imgPromise).then(result => {
        let typeId = req.body.typeId;
        let proId = 'pro_' + new Date().getTime();
        req.body.img = result[0];
        req.body.detailImg = result[1];
        delete req.body.imgType;
        delete req.body.detailImgType;
        //启动事务处理
        api.transactionData(async (t) => {
            await api.createData('Product',{...req.body,proId},t);
            await api.createData('ProductType',{typeId,proId},t);
            await api.createData('UserProduct',{proId,userId:req.userId},t);

        }).then(() => {
            res.send({msg:'发布商品成功',status:1130});

        }).catch(() => {
            res.send({msg:'发布商品失败',status:1131})
        });
    }).catch(() => {
        res.send({msg:'发布商品失败',status:1131})
    });
}


