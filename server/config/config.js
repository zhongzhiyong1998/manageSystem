//配置层

let env = process.env.NODE_ENV;

module.exports = require(path.resolve(__basename,`config/config.${env}.js`));

