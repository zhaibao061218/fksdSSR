const env = require('./env')
// import path from 'path'
// import fs from 'fs'

export default {
    //配置https证书
    // server: {
    //     https: {
    //         key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //         cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    //     }
    // },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    ssr: true,
    head: {
        title: '福克斯德 专为传统企业转型跨境电商提供一站式解决方案',
        meta: [
            { charset: 'utf-8' },
            { hid: 'description', name: 'description', content: '福克斯德 专为传统企业转型跨境电商提供一站式解决方案福克斯德已助力10,000多家企业入驻亚马逊平台，拥有全球开店、亚马逊代运营、亚马逊培训、团队孵化、联合运营、销量倍增、亚马逊配套服务等业务。' },
            { hid: 'keywords', name: 'keywords', content: 'Amazon代运营，亚马逊代运营,亚马逊全球开店,亚马逊代运营公司,亚马逊代运营费用,亚马逊代运营哪家好,亚马逊线上培训,亚马逊实操培训、亚马逊账号注册、VAT注册、商标注册' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'https://hm.baidu.com/hm.js?f0726d5be10a3e6235c03594baa00c95' }, /*引入百度统计的js*/ 
        ]
    },
    
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/css/main.scss',
        'element-ui/lib/theme-chalk/index.css',
        'swiper/css/swiper.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/axios.js',
        '@/plugins/ga.js', //百度统计
        {
            src: "@/plugins/vue-swiper.js",
            ssr: false
        },
        {
            src: "@/plugins/map.js",
            ssr: false
        }
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/moment',

    ],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: ['@nuxtjs/axios'],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: [/^element-ui/],
        extractCSS: true,
    },
    axios: {
        proxy: true,
        credentials: true
    },
    proxy: {
        '/api/': {
            target: env[process.env.MODE].ENV_API, //API服务器的地址
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/api/': ''
            }
        }
    }
}