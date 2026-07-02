# dba-agent-workbench 零基础学习地图

这份文档面向没有前端基础的人。它不是代码清单，而是告诉你：

- 关键文件在哪里。
- 文件后缀代表什么语言或技术。
- 这个技术是什么。
- 它为了解决什么问题。
- 官方学习链接在哪里。
- 它在当前项目里负责什么。

## 1. `package.json`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/package.json` |
| 文件后缀 | `.json` |
| 对应技术 | JSON / Node.js 项目配置 |
| 它是什么 | JSON 是一种结构化数据格式，常用来写配置。`package.json` 是 Node.js / 前端项目的说明书。 |
| 解决什么问题 | 告诉项目要安装哪些依赖、有哪些命令、项目叫什么。 |
| 官方学习链接 | https://nodejs.org/api/packages.html |
| 当前项目作用 | 定义 `pnpm dev`、`pnpm lint`、`pnpm build`，并声明 Next.js、React、TypeScript、Tailwind 等依赖。 |

你可以把它理解为：这个项目的说明书和启动菜单。

## 2. `src/app/page.tsx`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/src/app/page.tsx` |
| 文件后缀 | `.tsx` |
| 对应技术 | TypeScript + JSX / React Component |
| 它是什么 | `.tsx` 是可以写 TypeScript 和 JSX 的文件。JSX 是一种在 JavaScript/TypeScript 里写页面结构的语法。 |
| 解决什么问题 | 用组件的方式描述页面长什么样、数据如何渲染到页面上。 |
| 官方学习链接 | https://react.dev/learn |
| 当前项目作用 | 首页主页面。它定义故障会话、聊天消息、Agent 执行轨迹、工具调用和 Day 2 学习模式。 |

你可以把它理解为：当前页面的主体剧本。

## 3. `src/app/layout.tsx`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/src/app/layout.tsx` |
| 文件后缀 | `.tsx` |
| 对应技术 | Next.js App Router / React Layout |
| 它是什么 | Next.js App Router 里的根布局文件，用来包住页面内容。 |
| 解决什么问题 | 统一设置整个应用的 HTML 外壳、网页标题、描述和全局样式入口。 |
| 官方学习链接 | https://nextjs.org/docs/app |
| 当前项目作用 | 设置页面标题 `DBA Agent Workbench`，并把 `page.tsx` 渲染到 `{children}` 位置。 |

你可以把它理解为：整个页面的外框。

## 4. `src/app/globals.css`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/src/app/globals.css` |
| 文件后缀 | `.css` |
| 对应技术 | CSS / Tailwind CSS |
| 它是什么 | CSS 是网页样式语言，用来控制颜色、布局、字体、间距。Tailwind 是一套用 class 写样式的 CSS 工具。 |
| 解决什么问题 | 设置全局基础样式，并引入 Tailwind。 |
| 官方学习链接 | https://tailwindcss.com/docs |
| 当前项目作用 | 设置全局背景色、文字色、字体和盒模型，让整个页面有统一基础样式。 |

你可以把它理解为：全局装修规则。

## 5. `next.config.ts`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/next.config.ts` |
| 文件后缀 | `.ts` |
| 对应技术 | TypeScript / Next.js 配置 |
| 它是什么 | `.ts` 是 TypeScript 文件。TypeScript 是 JavaScript 的类型增强版本。 |
| 解决什么问题 | 配置 Next.js 项目的构建和运行行为。 |
| 官方学习链接 | https://nextjs.org/docs/app/api-reference/config/next-config-js |
| 当前项目作用 | 当前还是默认配置，后续如果要配置图片、构建、重定向等，会在这里扩展。 |

你可以把它理解为：Next.js 的项目设置面板。

## 6. `tsconfig.json`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/tsconfig.json` |
| 文件后缀 | `.json` |
| 对应技术 | TypeScript 配置 |
| 它是什么 | TypeScript 编译器的配置文件。 |
| 解决什么问题 | 告诉 TypeScript 如何检查代码、识别路径别名、支持哪些语法。 |
| 官方学习链接 | https://www.typescriptlang.org/docs/ |
| 当前项目作用 | 支持项目里的 `.ts` 和 `.tsx` 文件类型检查，也支持 `@/*` 这种路径别名。 |

你可以把它理解为：TypeScript 老师的判作业规则。

## 7. `eslint.config.mjs`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/eslint.config.mjs` |
| 文件后缀 | `.mjs` |
| 对应技术 | JavaScript Module / ESLint |
| 它是什么 | ESLint 是代码规范检查工具，`.mjs` 是 JavaScript 的 ES Module 文件格式。 |
| 解决什么问题 | 检查代码风格和潜在错误，避免项目越写越乱。 |
| 官方学习链接 | https://eslint.org/docs/latest/ |
| 当前项目作用 | 让 `pnpm lint` 可以检查 Next.js / React / TypeScript 代码。 |

你可以把它理解为：代码卫生检查规则。

## 8. `postcss.config.mjs`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/postcss.config.mjs` |
| 文件后缀 | `.mjs` |
| 对应技术 | PostCSS / Tailwind CSS |
| 它是什么 | PostCSS 是处理 CSS 的工具链，Tailwind 通过它参与样式构建。 |
| 解决什么问题 | 让 Tailwind 的样式能被正确处理并生成最终 CSS。 |
| 官方学习链接 | https://postcss.org/ |
| 当前项目作用 | 接入 `@tailwindcss/postcss`，让 Tailwind 在 Next.js 项目里生效。 |

你可以把它理解为：CSS 加工流水线配置。

## 9. `pnpm-lock.yaml`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/pnpm-lock.yaml` |
| 文件后缀 | `.yaml` |
| 对应技术 | pnpm lockfile / YAML |
| 它是什么 | lockfile 记录依赖的精确版本。YAML 是一种配置文件格式。 |
| 解决什么问题 | 保证别人安装依赖时，拿到和你本机一致的版本。 |
| 官方学习链接 | https://pnpm.io/git#lockfiles |
| 当前项目作用 | 锁定 Next.js、React、TypeScript 等依赖版本，保证构建稳定。 |

你可以把它理解为：项目依赖版本的收据。

## 10. `public/*.svg`

| 项目 | 说明 |
|---|---|
| 文件路径 | `projects/dba-agent-workbench/public/*.svg` |
| 文件后缀 | `.svg` |
| 对应技术 | SVG |
| 它是什么 | SVG 是矢量图片格式，常用于图标。 |
| 解决什么问题 | 存放可以被网页直接访问的静态图片资源。 |
| 官方学习链接 | https://developer.mozilla.org/en-US/docs/Web/SVG |
| 当前项目作用 | 当前是脚手架默认资源，后续可以删除或替换成项目自己的图标。 |

你可以把它理解为：网页可以直接拿来用的图片素材。

## 从项目维度重新理解这些文件

| 类别 | 文件 | 在项目里解决什么问题 |
|---|---|---|
| 页面内容 | `page.tsx` | 决定页面展示什么，三栏怎么组织，mock 数据怎么展示。 |
| 应用外壳 | `layout.tsx` | 决定网页外层结构、标题、全局样式入口。 |
| 样式系统 | `globals.css`、`postcss.config.mjs` | 决定 Tailwind 和全局样式如何生效。 |
| 工程配置 | `package.json`、`tsconfig.json`、`eslint.config.mjs`、`next.config.ts`、`pnpm-lock.yaml` | 决定项目如何安装、运行、检查、构建。 |

## 今天最该记住的 3 句话

1. `.tsx` 是写 React 页面组件的地方，当前首页主要在 `page.tsx`。
2. `package.json` 是项目说明书，里面定义依赖和启动命令。
3. Next.js 项目不是只有页面代码，还需要配置、样式、依赖和构建检查共同工作。
