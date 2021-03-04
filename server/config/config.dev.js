let serverOptions = {
    host:'http://127.0.0.1',
    port:9000,
    //请求体大小限制
    limitBody:'2000kb',
}


exports.serverOptions = serverOptions;

exports.mysqlOptions = {
    database:'server',
    user:'root',
    password:'123456',
    host:'localhost',
    dialect:'mysql',
    underscored:true,
    timezone:'+08:00'
}

//加盐
exports.saltOptions = {
    //密码
    password:'_pws',
    //token
    token:'_tks'
}


//邮件配置
exports.emailOptions = {
    host: "smtp.163.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    user: 'baby15631695622@163.com', // generated ethereal user
    pass: 'ZXIAEPJSIYEURDVZ', // generated ethereal password
}

//验证码有效期

exports.codeOptions = {
    //单位分钟
    expires:5
}


//token配置
exports.tokenOptions = {
    expires:'1d',
    keys:['rtaad','sasft','hoapt',],
}



//昵称
exports.nickNameOptions = [
    '白云',
    '青云',
    '老鹰',
    '彩虹',
]


//配置访问静态目录的伪路径
exports.staticBaseUrl = {
    base:'/yubn/files',
    url:`${serverOptions.host}:${serverOptions.port}`
}
