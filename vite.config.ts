// 位于项目的根路径，项目的全局配置文件，启动时会自动读取该文件
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: { // 配置别名
            '@': resolve('./src'),
            'com':resolve('./src/components')
        }
    },
    base:'./', // 打包路径
    server:{
        port:3000, // 服务端口
        open:true, // 启动服务时是否自动打开浏览器
        cors:true, // 允许跨域
    }
})
