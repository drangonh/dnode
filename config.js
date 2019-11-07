//配置文件：数据库配置/日志配置/服务配置/....

const local = {
    host: 'localhost',
    password: 'yn666666',
};

const server = {
    host: 'http://106.54.237.71/',
    password: 'Aabcde786676631!',
};

const config = {
    port: 3000,
    database: {
        port: '3306',
        user: 'root',
        database: 'koademo',
        ...server
    }
}

module.exports = config;
