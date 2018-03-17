# vue-startup
vue + poi + element-ui + typescript = startup example project

## 准备工作

### 全局安装依赖

```
npm i -g poi typescript tslint
```

### 项目安装依赖

```
npm i
```

### VSCode插件
```
TSLint TSLint Vue Vetur
```

## 项目启动

启动项目Debug模式，Debug模式下，public目录不会有任何输出。
```
poi
```

编译项目
```
poi build
```

## 相关学习资料

- poi.js官网：https://poi.js.org
- `.vue`单文件组件：https://cn.vuejs.org/v2/guide/single-file-components.html
- 使用TypeScript编写vue组件：https://cn.vuejs.org/v2/guide/typescript.html
- 拓展TypeScript编写vue组件：https://github.com/kaorun343/vue-property-decorator
- vue + typescript 新项目起手式：https://segmentfault.com/a/1190000011744210
- 安装ElementUI：http://element-cn.eleme.io/#/zh-CN/component/quickstart

## Visual Studio Code 配置

为了更好的编写`.vue`文件，需要给VSCode添加一点插件，并且配置好格式化规则。

1. 安装`vetur`插件，为了编辑`.vue`文件；
2. 修改VSCode的配置文件：
```json
    "vetur.format.defaultFormatter.ts": "vscode-typescript",
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "vetur.format.defaultFormatter.html": "js-beautify-html",
```

>安装好所有东西之后，建议重新启动一次VSCode