
//注册控制器
module.exports = (req,res) => {
    //查询邮箱是否被注册
    api.findData('User',{email:req.body.email},['email']).then(result => {
        //如果邮箱没有被注册，则执行
        if(result.length == 0){
            //创建userID
            let userId = 'u_' + new Date().getTime();
            //密码加密
            let password = utils.encodeString(req.body.password);

            //随机生成昵称
            let nickName = utils.getRandomElement(config.nickNameOptions);
            //将数据写入user表
            api.createData('User',{
                userId,
                email:req.body.email,
                password,
                nickName,
            }).then(r1 => {
                res.send({msg:'注册成功',data:r1,status:1000});
            }).catch(err => {
                res.send({msg:'注册失败',status:1001});
            })
        }else {
            res.send({msg:'邮箱已被注册'});
        }
    }).catch(err => {
        res.send({msg:'注册失败'});
    })    
}