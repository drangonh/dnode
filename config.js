//配置文件：数据库配置/日志配置/服务配置/....

const config = {
  port:3000,
  database:{
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'koademo'
  }
}

module.exports = config;
