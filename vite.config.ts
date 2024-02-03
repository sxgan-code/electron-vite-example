import {defineConfig, loadEnv} from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const ENV_DIR = path.resolve(__dirname, "./env")
    // 启动时根据 command 和 mode 加载 env 内容，全局生效
    const env = loadEnv(mode, ENV_DIR, "")
    const isServe = command === "serve";
    const isBuild = command === "build";
    // 启动时打印 key 的内容
    console.log("当前环境VITE_APP_ENV：" + env.VITE_APP_ENV)
    return {
        base:'./',
        envDir: ENV_DIR,
        plugins: [
            vue(),
            electron({
                main: {
                    // Shortcut of `build.lib.entry`.
                    // electron入口文件配置
                    entry: 'electron/main.ts',
                },
                preload: {
                    // 预加载脚本
                    // Shortcut of `build.rollupOptions.input`.
                    // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
                    input: path.join(__dirname, 'electron/preload.ts'),
                },
                // Ployfill the Electron and Node.js built-in modules for Renderer process.
                // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
                renderer: {},


            }),
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [path.resolve(__dirname, "src/assets/images/common/svg")],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
                /**
                 * 自定义插入位置
                 * @default: body-last
                 */
                inject: 'body-last',
                /**
                 * custom dom id
                 * @default: __svg__icons__dom__
                 */
                customDomId: '__svg__icons__dom__',
            }),
            AutoImport({
                resolvers: [
                    ElementPlusResolver(),
                    // Auto import icon components
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                // 配置auto-imports.d.ts文件生成路径
                dts: path.resolve(__dirname, "other/auto-imports.d.ts"),

            }),
            Components({
                resolvers: [
                    // Auto register icon components
                    // 自动注册图标组件
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    ElementPlusResolver(),
                ],
                // 配置components.d.ts文件生成路径
                dts: path.resolve(__dirname, "other/components.d.ts")
            }),
            Icons({
                autoInstall: true,
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, "./src")
            }
        },
        server:{
            port:9999,
            host:'127.0.0.1'
        }
    }
})
