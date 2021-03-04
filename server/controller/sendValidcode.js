//发送验证码

module.exports = (req,res) => {
    //随机验证码
    let code = utils.createValidcode(6);
    //生成验证码id
    let codeId = 'c_' + new Date().getTime();
    //先保存验证码，再发送
    api.createData('Code',{
        codeId,
        email:req.body.email,
        code,
    }).then( result => {

        // return res.send({msg:'发送验证码成功',status:1010,data:{codeId:result.dataValues.codeId}});
        utils.sendValidcode({
            from: config.emailOptions.user, 
            to: req.body.email,
            subject: "后台管理系统", 
            text: `验证码为：${code} ,${config.codeOptions.expires}分钟有效`, 
        }).then(() => {
            res.send({msg:'发送验证码成功',status:1010,data:{codeId:result.dataValues.codeId}});
        }).catch(err => {
            console.log(err);
            res.send({msg:'获取验证码失败', status:1010})
        })
    })
    return ;
}



