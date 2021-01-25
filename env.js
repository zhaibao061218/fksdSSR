module.exports = {
    dev: {
        MODE: 'development',
        ENV_API: 'http://47.107.83.33:9000/api/' //测试服务器地址
    },
    pro: {
        MODE: 'production',
        ENV_API: 'https://api.focusorder.com/api/' // 正式服务器地址
    }
}