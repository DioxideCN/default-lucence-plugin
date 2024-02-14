# default-lucence-plugin

## 仓库摘要

使用 default-lucence-plugin 模板来快速开发一个 Lucence Editor 的扩展。

## 环境配置

1. [Node 18+](https://nodejs.org/en)
2. [Halo 2.11+](https://docs.halo.run/developer-guide/core/prepare)
3. Lucence Editor 1.0+

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

    - 进入到 `rollup.config.js` 中，修改 `output.file` 为 `你的插件名.js`
    - 进入到 `/src/index.ts` 中，按需配置插件的 `detail` 属性

4. 构建项目

    ```
    # Lucence Editor 扩展开发的文档还在编写中
    # 开发者可以先参考 /src/libs 中的注释文档进行撰写

    # 完成编写后构建项目
    npm run build
    ```

5. 上传插件到Lucence Editor

    将位于 `/dist` 目录下构建完成的插件上传至你的 Halo 站点的 Lucence Editor 中并刷新页面
