# Galaxy X 的 Window、Mac 和 Web 客户端

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

或者使用 tyarn

```bash
npm install yarn tyarn -g
# tyarn 使用淘宝源
tyarn install
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
| │ | ├── mixin.scss            # Scss Mixin
| │ | ├── function.scss         # Scss Function
| │ | ├── global.scss           # 全局 CSS, main.ts 将引入 global.scss
| │ | ├── element-ui-theme.scss # Element UI 变量和颜色全局覆盖
| │ | └── variable.scss         # SASS 变量
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
- VUE_APP\_[...] 其他

## 组件

### 组建规划

通用基础 Ui 单部件组件: 搜索栏, tag, 图标, 按钮, 日历

### 组件开发风格规范

此规范的目的是为了保持编码风格一致，降低代码阅读成本，提高团队协作效率，便于后人优化维护，输出高质量的文档。

#### 命名规范

##### 1. 组建文件名或文件夹名以大驼峰格式命名

```
// ✖
src/component/base/gx-input.vue
src/component/base/gx-calendar/index.vue
src/component/base/gx-calemdat/GxCalendarMonth.vue
src/views/example-view.vue

// ✔
src/component/base/GxInput.vue
src/component/base/GxCalendar/index.vue
src/component/base/GxCalemdat/GxCalendarMonth.vue
src/views/Example.vue
```

##### 2. 组件在 vue 模版中使用时使用小写字母，使用`-`分割

```
// ✔
<gx-input></gx-input>
```

##### 3. method 方法命名使用小驼峰式命名，统一使用动词或者动词加名词的形式

```ts
// ✔
class Login extends Vue {
  login() {}
  submitForm() {}
}
```

##### 4. prop 命名使用小驼峰式命名定义，在 vue 模版中使用小写字母和`-`分割来使用

```
// ✖
<loginForm></loginForm>

// ✔
<login-form></login-form>
```

##### 5. `$emit` 事件使用小驼峰式命

##### 6. `$ref` 使用小驼峰式命名

#### 分类

##### 1. UI 组件

基本 UI 组件，比如：输入框、按钮、图标等。

- 单一职责
- 可复用/通用，数据解耦
- 可单元测试
- 样式开发基于 [样式](#样式) 以适应切换

存放路径:`src/components/base/`

##### 2. 公共业务组件

实现单一功能的、被多个视图公用的业务组件，比如登录表单`LoginFrom`、待办事项列表`TaskList`。
存放路径:`src/components/common/`

##### 3. 视图业务组件

实现当前视图内的业务逻辑组件。
存放路径:`src/components/[视图名称]/`

##### 3. 视图组件

及页面组件，仅包含页面布局、路由逻辑。
存放路径:`src/views/`

## 样式

### 样式开发

封装开或发装组件时使用 css 变量 `var(--variable)` 变量设置或覆盖 UI 库文本、背景、边框等颜色。

- 全局样式，css 变量 `src/assets/css/global.scss`
- SASS 变量 `src/assets/css/variable.scss`

### 样式变量

```sass
/* CSS 变量 */
/* 主题颜色 */
--colorPrimary
--colorPrimaryLighter
--colorPrimaryDarker

/* 实用色彩 */
// 成功颜色
--colorSuccess
--colorSuccessLighter
--colorSuccessDarker
  // 警告颜色
--colorWarning
--colorWarningLighter
--colorWarningDarker
  // 危险颜色
--colorDanger
--colorDangerLighter
--colorDangerDarker
  // 信息颜色
--colorInfo
--colorInfoLighter
--colorInfoDarker

  /* 文字颜色 */
--colorTextPrimary // 主要文字颜色
--colorTextRegular // 常用文字颜色
--colorTextSecondary // 次要文字颜色
--colorTextPlaceholder // 占位文字颜色
--colorTextDisabled // 禁用文字颜色(
--colorTextWithBackground // 彩底文字颜色

  /* 边框颜色 */
--colorBorderBase // 主要边框颜色
--colorBorderRegular // 常用边框颜色
--colorBorderDisabled // 禁用边框颜色

  /* 背景颜色 */
--colorBackgroundBase // 基本背景颜色(
--colorBackgroundRegular // 常用背景颜色
--colorBackgroundDisabled // 禁用背景颜色

/* SASS 变量 */
$gutter // 单倍边距

$borderRadius // 圆角半径
```

### SCSS\SASS\CSS 中使用 css 变量

```scss
color: var(--colorPrimary);
background-color: var(--colorBackgroundBase);
broder-color: var(--colorBorderBase);
```

### SCSS\SASS 中使用 SASS\SCSS 变量

```scss
margin: $gutter;
```

### 主题切换

切换主题:

```javascript
import { AppModule } from "@/store/app";
AppModule.SetTheme(theme);
```

## Todo

- [ ] css 变量向下兼容
- [ ] 多 css 入口

## 历史记录

### 2020-07-15

### 2020-07-15

- 添加 Element UI
- 添加 全局样式和样式变量

### 2020-07-11

- 添加 vue-cli-plugin-electron-builder
- 添加 reset-css
- 添加 目录结构文档
- 添加 主进程目录结构
