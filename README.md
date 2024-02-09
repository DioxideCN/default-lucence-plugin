# default-lucence-plugin

## 仓库摘要

使用 default-lucence-plugin 模板来快速开发一个 Lucence Editor 的扩展。

## 环境配置

1. Node 18+

## 开发步骤

1. fork本仓库

```
git clone git@github.com:DioxideCN/default-lucence-plugin.git
# 或者当你 fork 之后
git clone git@github.com:{your_github_id}/default-lucence-plugin.git
# 打开你的目录
cd path/to/default-lucence-plugin
```

2. 初始化Node项目

```
npm i 或 npm install
```

3. 配置项目

进入到 `/src/index.ts` 中，按需配置插件的 `detail` 属性

4. 构建项目

```
# 完成编写后构建项目
npm run build
```

5. 上传插件到Lucence Editor

将位于 `/dist` 目录下构建完成的插件上传至你的 Halo 站点的 Lucence Editor 中并刷新页面
