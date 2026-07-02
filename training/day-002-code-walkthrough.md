# Day 2 代码走读：dba-agent-workbench

## 这次走读的目的

你不是只要知道“页面长什么样”，而是要能讲清楚：

1. 这个项目为什么存在。
2. 页面为什么设计成三栏。
3. 每个文件负责什么。
4. mock 数据对应未来真实系统里的什么模块。
5. 下一步 fake streaming 为什么是合理的演进。

## 1. 项目一句话

`dba-agent-workbench` 是一个面向 DBA 故障处理场景的 AI Agent 前端工作台。

它不是普通聊天页面，而是把一次数据库故障排查拆成：

- 左侧：故障会话列表
- 中间：用户和 Agent 的对话
- 右侧：Agent 执行轨迹和工具调用

核心价值：

> 让 AI Agent 的分析过程可见、可审计、可人工介入。

## 2. package.json 走读

文件：`projects/dba-agent-workbench/package.json`

你要知道的重点：

- `next`：项目框架。
- `react` / `react-dom`：页面组件渲染。
- `typescript`：让代码有类型检查，减少低级错误。
- `tailwindcss`：快速写页面样式。
- `eslint`：检查代码规范。

常用命令：

```bash
pnpm dev
pnpm lint
pnpm build
```

面试讲法：

> 这个项目第一版用 Next.js + React + TypeScript + Tailwind 搭建，先验证 AI Agent 工作台的信息架构。每次改动后我会跑 lint 和 build，保证项目能正常构建。

## 3. layout.tsx 走读

文件：`projects/dba-agent-workbench/src/app/layout.tsx`

它是 Next.js App Router 的根布局。

核心职责：

- 设置页面标题和描述。
- 引入全局样式。
- 给所有页面提供 HTML 和 body 骨架。

关键代码含义：

```tsx
export const metadata = {
  title: "DBA Agent Workbench",
  description: "面向 DBA 故障处理流程的 AI Agent 工作台模拟界面。",
};
```

这段用于设置网页元信息。

```tsx
{children}
```

`children` 代表具体页面内容，比如首页。

面试讲法：

> `layout.tsx` 是应用级外壳，后续如果要加全局导航、登录状态、主题切换或全局 Provider，都可以从这里扩展。

## 4. globals.css 走读

文件：`projects/dba-agent-workbench/src/app/globals.css`

核心职责：

- 引入 Tailwind。
- 设置全局背景色、文字色、字体。
- 设置基础盒模型。

关键代码：

```css
@import "tailwindcss";
```

这句让 Tailwind class 可以在页面中使用。

面试讲法：

> 全局 CSS 只放基础规则，具体业务页面主要使用 Tailwind class 来实现布局和状态样式。

## 5. page.tsx 走读：数据部分

文件：`projects/dba-agent-workbench/src/app/page.tsx`

当前页面有 4 组 mock 数据。

### 5.1 sessions

代表左侧故障案例列表。

例子：

- CPU 飙高排查
- 慢 SQL 分析
- 主备延迟
- 存储水位风险

未来对应：

- 后端会话列表
- 历史故障记录
- Agent 任务列表

### 5.2 messages

代表中间 Chat 对话。

包括：

- 用户输入
- Agent 回复

未来对应：

- 真实模型输出
- 流式消息
- 错误重试
- 重新生成

### 5.3 agentSteps

代表右侧 Agent 执行轨迹。

当前状态：

- 制定计划
- 检索知识
- 调用工具
- 人工审批
- 生成报告

未来对应：

- LangGraph 节点状态
- Agent workflow 状态机
- 可审计执行流程

### 5.4 toolCalls

代表工具调用卡片。

当前模拟工具：

- `health_check`
- `active_session_scan`
- `explain_sql`

未来对应：

- MCP tools
- 数据库只读诊断工具
- 慢 SQL 分析工具
- 执行计划分析工具

## 6. StatusBadge 走读

`StatusBadge` 是一个小组件。

它接收一个 `status` 字符串，然后根据状态展示不同颜色。

为什么要抽出来？

- 状态标签在多个地方重复出现。
- 抽成组件后，样式集中管理。
- 以后更容易迁移到 `ai-agent-ui-components` 组件库。

面试讲法：

> 我从第一版就把重复状态展示抽成小组件，后续会继续把 ToolCallCard、AgentTimeline、ArtifactPanel 抽到组件库。

## 7. 三栏布局走读

关键布局：

```tsx
lg:grid-cols-[280px_minmax(0,1fr)_360px]
```

含义：

- 左栏 280px：故障案例列表
- 中间自适应：Chat 主工作区
- 右栏 360px：Agent 执行轨迹和工具调用

为什么不是普通 Chat 页面？

普通 Chat 页面只回答问题，但 Agent 产品还要展示：

- Agent 正在做什么
- 调用了什么工具
- 参数是什么
- 结果是什么
- 哪些动作需要人工审批
- 最后如何生成报告

所以三栏布局是为了同时呈现：

- 输入
- 过程
- 结果

## 8. 为什么现在先用 mock 数据

原因：

1. Day 1 先验证产品信息架构。
2. 不引入 API key 和模型成本。
3. 先把 UI 状态设计清楚。
4. 后续接真实模型时风险更低。

面试讲法：

> 我没有一开始就接真实模型，因为 AI Agent 产品不只是调用模型。先用 mock 数据把会话、执行轨迹、工具调用、审批和报告的信息架构确定下来，后续再接 streaming API、RAG 和 MCP，会更稳。

## 9. 下一步 fake streaming

fake streaming 是模拟模型逐字或分段输出。

它要训练的能力：

- 生成中状态
- 停止生成
- 重新生成
- 错误重试
- 消息追加
- 后续接 SSE / Vercel AI SDK

面试讲法：

> fake streaming 是从静态 mock 走向真实 AI 应用的第一步。它不依赖真实模型，但能先把流式 UI、消息状态机、停止生成和错误重试这些关键体验练出来。

## 10. 今天你必须能回答的 5 个问题

1. 这个项目是什么？
2. 为什么不能只做普通 Chat 页面？
3. 为什么设计成三栏？
4. Agent 执行轨迹和工具调用有什么价值？
5. 下一步为什么做 fake streaming？

## 标准回答模板

> 这个项目是一个面向 DBA 故障处理场景的 AI Agent 前端工作台。它采用三栏布局：左侧管理故障会话，中间是用户和 Agent 的对话，右侧展示 Agent 执行轨迹和工具调用过程。它和普通 Chat 页面不同，因为 Agent 产品需要展示执行过程、工具调用、人工审批和审计记录。当前版本先用 mock 数据验证产品形态，下一步会加入 fake streaming，训练流式输出、停止生成、重试和状态管理能力。

