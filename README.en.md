continuously updating... @sxgan

## PROJECT INITIATION

install dependencies

```sh
npm install
```
Start the command

`Note`: Dev uses the local environment, Pro is the online environment, the picture is in the cloud, please use the Pro environment to start, the Pro environment will be started and the picture cannot be loaded.
However, it is normal after using build to build, the reason may be related to local development, or you can add images to the local area by yourself, pay attention to modify the path
```shell
npm run pro
```
build commands
```shell
npm run build
```
Note: The initial boot loading will be slow, and the packaged file is in the `dist-electron/release/` directory, which generally stores the packaged version.
Enter the corresponding installation execution file according to the version, `win-unpacked` is the green version without installation, you can directly run the exe file, and the same is true for other system environments

## description of the project structure
```sh
+ ├─┬ electron
+ │ ├── electron-env.d.ts             # Electron 变量声明文件   
+ │ ├── main.ts                       # Electron Main文件  
+ │ └── preload.ts                    # Electron 预加载脚本
+ │ └── env                           # vite 环境变量文件夹
+ │ └── other                         # vite 其他配置文件夹,自动导入等
+ │ └── public                        # Electron 静态资源文件夹
  ├─┬ src
  │ └── main.ts                       # vue 入口ts文件
  │ └── App.vue                       # Vue 单页面，用于挂载到index.html
  │ └── vite-env.d.ts                 # vite 变量声明文件
  │ └─┬ assets
  │   └── css                         # vue 公共css文件夹
  │   └── fonts                       # vue 字体文件夹
  │   └── iconfonts                   # vue 字体图标文件夹
  │   └── images                      # vue 图片文件夹
  │ └── components                    # vue 组件-用于view目录的单页面组件
  │ └── router                        
  │ │   └── index.ts                  # vue-router 配置文件
  │ └── store                         # 存放pinia store文件目录
  │ └── utils                         
  │ │   └── CommonUtils.ts            # vue 公共ts文件-通用方法
  │ │   └── http.ts                   # axios http配置文件
  │ └── views                         # 存放vue单页面
  ├── index.html
  ├── electron-builder.json5          # electron 构建配置文件
  ├── tsconfig.json                   # TypeScript 配置文件
  ├── tsconfig.node.json
  ├── package.json                    # 依赖
  └── vite.config.ts                  # vite 配置文件
```
SVG images can be directly placed in the `src/assets/images/common/svg` directory and will be automatically loaded into the `svgplugin.vue` page
## Install the image and some package management tools

1.install the cnpm taobao image
```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org

npm install -g cnpm --registry=https://registry.npmmirror.com
```
2.set npm as a taobao image
```shell
npm config set registry https://registry.npm.taobao.org

npm config set registry https://registry.npmmirror.com
```
3.check the cnpm image settings by npm
```shell
npm config get registry
```
4.View CNPM image settings by CNPM: (equivalent to using CNPM)
```shell
cnpm config get registry
```
5.install yarn
```shell
npm install -g yarn --registry=https://registry.npmmirror.com
```

## build the issue
When using `npm run build`, we can't download the GitHub necessary build package, in this case we need to use yarn to build the downloaded package
Generally, it will be on the C drive, and it can be used permanently after building it once, so if you use npm to build it, you won't download it again
```shell 
yarn run build
```
Then you can use `npm run build`, the above command is just for easy download
