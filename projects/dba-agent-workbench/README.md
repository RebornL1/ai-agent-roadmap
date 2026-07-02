# dba-agent-workbench

AI Agent 学习路线的 Day 1 项目。

## 项目目标

做一个可以逐步打磨成作品集的 AI Agent 工作台，场景聚焦 DBA 故障处理流程。当前第一版是静态 Next.js 模拟页面，用来先确定产品形态，暂时不接模型、工具、RAG 或 MCP。

## Day 1 范围

- Next.js App Router
- TypeScript
- Tailwind CSS
- 三栏工作台布局
- 模拟对话数据
- 模拟 Agent 执行轨迹
- 模拟工具调用卡片
- 不接真实模型
- 不使用 API key
- 不执行真实数据库操作

## 页面布局

- 左侧：故障案例列表
- 中间：聊天工作区
- 右侧：Agent 执行轨迹和工具调用面板

## 常用命令

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## 下一步里程碑

1. 增加模拟流式输出。
2. 增加消息状态流转。
3. 增加人工审批交互。
4. 抽取可复用的 Agent UI 组件。
5. 接入只读的模拟工具执行器。

## 面试可讲点

- 把真实 DBA 故障处理流程产品化，转成 AI Agent 工作台界面。
- 将用户对话、Agent 执行状态、工具调用审计轨迹分区展示。
- 从第一版就体现生产安全意识：只读诊断、人工审批、工具调用可追踪。
- 为后续接入 RAG、MCP 工具和 LangGraph 打下前端基础。
