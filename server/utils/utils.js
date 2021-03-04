//工具层

//导入加密模块 
const crypto = require('crypto');
//导入nodemailer
const nodemailer = require('nodemailer');
//导入jsonwebtoken
const jsonwebtoken = require('jsonwebtoken');
//导入文件系统模块
const fs = require('fs');
//导入uuid模块
const uuid = require('uuid');
//创建传输实例
let transporter = nodemailer.createTransport({
    host: config.emailOptions.host,
    port: config.emailOptions.port,
    secure: config.emailOptions.secure, // true for 465, false for other ports
    auth: {
      user: config.emailOptions.user, // generated ethereal user
      pass: config.emailOptions.pass, // generated ethereal password
    },
  });

class Utils {
    //加密字符串
    encodeString(value){
        //创建md5加密方式
        let md5 = crypto.createHash('md5');
        //加密字符串
        let encode = md5.update(`${config.saltOptions.password}${value}`);
        //输出32位加密的字符串
        return encode.digest('hex');
    }

    //发送验证码
    sendValidcode(options){
        return new Promise((resolve,reject) => {
            transporter.sendMail(options,(err,info) => {
                //如果发邮件失败
                if(err) {
                    reject(err)
                }else {
                    resolve(info);
                }
            })
        })
    }

    //随机生成验证码
    createValidcode(n) {
        let chars = [0,1,2,3,4,5,6,7,8,9];
        let codes = []
        for(let i = 0;i < n; i++){
            let randomIndex = Math.floor(Math.random() * chars.length);
            codes.push(chars[randomIndex]);
        }
        return codes.join('');
    }

    //签名token
    signToken(value){
        return jsonwebtoken.sign({
            data:value,
        },config.saltOptions.token,{expiresIn:config.tokenOptions.expires});
    }

    //解析token
    verifyToken(token){
        return new Promise((resolve,reject) => {
            jsonwebtoken.verify(token,config.saltOptions.token,(err,decoded) => {
                if(err) {
                    //解析失败
                    reject(err);
                }else {
                    //解析成功
                    resolve(decoded);
                }
            })
        })
    }

    //将cookie转换为普通对象
    transformCookie(cookie) {
        let cookies = cookie.split('; ');
        if(cookies.length == 0){
            return null;
        }
        let cookieObject = {};
        cookies.forEach(v => {
            let c = v.split('=');
            cookieObject[c[0]] = c[1];
        })
        return cookieObject;
    }

    //随机在数组获取一个元素
    getRandomElement(arr){
        let randomIndex = Math.floor(Math.random()*arr.length);
        return arr[randomIndex];
    }

    //上传图片
    uploadImg(imgBase64,type){
        return new Promise((resolve,reject) => {
            //创建Buffer将文件信息转为二进制文件
            let buffer = Buffer.from(imgBase64,'base64');
            //创建文件名称
            let fileName = uuid.v1()+`.${type}`;
            //将buffer写入服务器中
            let fileUrl = path.resolve(__basename,`upload/proImgs/${fileName}`);
            fs.writeFile(fileUrl,buffer,err => {
                if(err){
                    reject(err);
                }else{
                    resolve(fileName);
                }
            });
        })
    }
}

module.exports = new Utils();

