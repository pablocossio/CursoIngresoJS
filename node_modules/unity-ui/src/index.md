## Quick Start

### Install

```bash
yarn add unity-ui
```

### Usage

```ts
import React from 'react';
import 'unity-ui/dist/index.css';
import { Foo } from 'unity-ui';

export default <Foo />;
```

### Contribute

开发步骤:

- 新组件建议基于**master**拉一个新的**feature/组件名称**分支 相应修改也在对应分支上修改 验证无误再合并到 master
- 样式隔离 暂约定`dm-${组件名}-xx`
- 组件开发以**src**为根目录, 通过**index.ts**暴露入口
- 通过**yarn start** 启动服务。
- 通过**yarn test** 进行测试

文档说明:

- 相应 md 文件放在对应组件目录里 根据需要通过 nav 配置项配置 path+生成菜单

开发完成后:

- 通过**yarn build**构建 dist
- 通过**yarn deploy --message=xxx**部署到内网 npm
- 通过**yarn doc:build**构建文档
- 通过**yarn doc:deploy**部署文档 (ssh 需要密码)

### ChangeLog

[跟新日志](https://github.com/EasySimple/unity-ui/blob/master/CHANGELOG.md)

### More

更多详情请查看[dumi 文档](https://d.umijs.org/)、[umi 文档](https://umijs.org/zh-CN)。
