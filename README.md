# Galaxy X 的 Window、Mac 和 Web 客户端

## 文件结构

```bash
├── .vscode/                    # 项目的 VS Code 配置文件
├── dist/                       # Web 平台编译输出文件
├── dist_electron/              # Electron 打包目录
│ ├── bundled/..                # webpack 编译输出文件
│ ├── [目标平台]-unpacked/..     # Electron 未达打包文件
│ ├── [应用名称] setup [版本].[(exe|dmg)]
| |                             # Electron app 安装程序
│ ├── index.js                  # 编译后的 渲染进程入口文件
│ └── ...
|
├── public/                     # 公用文件，不经过编译
├── src/
│ ├── assets/                   # 资源文件夹，样式、图片、字体、svg
| │ ├── css/                    # 所有 SASS 资源
| │ | ├── global.scss           # 全局 CSS
| │ | ├── element-ui-theme.scss # Element UI 主题
| │ | └── variable.scss         # SASS 变量和 Function 等
| │ ├── img/                    # 图片资源
| │ ├── svg/                    # svg 资源
│ | └── ...
│ |
│ ├── background/               # Electron 主进程
| │ ├── platform/               # 系统功能模块
| │ | ├── [功能a]/              # 功能 a
| │ | ├── [功能b]/              # 功能 b
| │ | └── ...
| | |
│ | └── main.ts                 # Electron 主进程入口
│ |
│ ├── components/               # 所有组件，共用业务组件和独有业务组件
| │ ├── base/                   # UI 组件
| │ ├── common/                 # 公共业务组件
| │ |── login/                  # Login 页面业务组件
| │ |── [页面b]/                # 页面 b 业务组件
| │ └── ...
| |
│ ├── router/                   # 路由配置
│ ├── store/                    # store 数据
| │ |── index.ts                # store 入口
| │ |── user                    # 用户 store
| │ └── ...
│ ├── views/                    # 页面组件
│ ├── App.vue                   # VUE App 入口
│ ├── background.ts             # Electron 主进程入口文件
│ ├── main.ts                   # Web 和 Electron 渲染进程入口文件
│ ├── registerServiceWorker.ts  # PWA worker 注册
│ ├── shims-sass.d.ts           # sass/scss 文件声明
│ ├── shims-tsx.d.ts            # tsx 文件声明
│ └── shims-vue.d.ts            # vue 文件声明
├── test/                       # 测试
│ ├── e2e/                      # e2e 测试
│ └── unit/                     # 单元测试
├── .browserslisterr            # 浏览器兼容设置
├── .editorconfig               # 编辑器设置
├── .eslintrc.js                # Eslint 设置
├── .gitgnore                   # git 文件忽略设置
├── babel.config.js             # Babel 设置
├── cypress.json                # cypress 设置
├── package.json
├── postcss.config.js           # PostCSS 设置
├── README.md                   # 项目描述文档
├── tsconfig.json               # ts 设置
├── vue.config.json             # Vue Cli 工具配置文件
├── .env                        # 环境变量，在所有的环境中被载入
├── .env.local                  # 环境变量，在所有的环境中被载入，但会被 git 忽略
├── .env.[mode]                 # 只在指定的模式中被载入
├── .env.[mode].local           # 只在指定的模式中被载入，但会被 git 忽略
```

## 环境变量

- NODE_ENV 环境模式
- BASE_URL 根路径
- VUE_APP_TITLE 应用标题
- VUE*APP*[...] 其他

## 组件布局
### 通用基础Ui单部件组件: 搜索栏, tag, 图标, 按钮, 日历




## 开始

### 项目安装

```bash
# 指定 yarn 模块下载源
yarn config set registry https://registry.npm.taobao.org

# 指定 node-sass 下载源
yarn config set sass-binary-site http://npm.taobao.org/mirrors/node-sass

# 指定 electron 下载源
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/

# 指定 chromedriver 下载源
yarn config set chromedriver_cdnurl https://npm.taobao.org/mirrors/chromedriver

yarn install
```

### 启动 Web 开发环境

```
yarn run serve
```

### 启动 Electron 开发环境

```bash
yarn electron:serve
```

## 打包

### Web 端打包

```
yarn run build
```

### Electron 打包

```bash
# 此处需要科学上网
yarn run electron:build
```

## 测试

### 运行测试

```
yarn run test
```

### 运行 Lints 和 修复文件

```
yarn run lint
```

### 运行 e2e 测试

```
yarn run test:e2e
```

### 运行单元测试

```bash
yarn run test:unit
```

## 历史记录

### 2020-07-15

- 修改

### 2020-07-15

- 添加 Element UI
- 添加 全局样式和样式变量

### 2020-07-11

- 添加 vue-cli-plugin-electron-builder
- 添加 reset-css
- 添加 目录结构文档
- 添加 主进程目录结构
