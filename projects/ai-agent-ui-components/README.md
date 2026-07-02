# ai-agent-ui-components

主线项目 4：AI Agent UI 组件库。

## 项目目标

抽取多个 AI Agent 项目中复用的前端组件，形成一套可组合、可复用、可展示的 AI-Native UI 组件库。

这个项目用于证明你不仅能写页面，也能做组件抽象、状态设计和工程化沉淀。

## 核心组件

- AI Chat
- ToolCallCard
- AgentTimeline
- ArtifactPanel
- HumanApprovalCard
- CitationList
- StreamingMessage
- ReportPreview

## 技术方向

- React
- TypeScript
- Tailwind CSS
- Zustand 可选
- Storybook 可选

## MVP 验收标准

- 至少抽取 4 个可复用组件。
- 每个组件有 props 类型定义。
- 每个组件有示例数据。
- README 展示使用方式。
- 能被 `dba-agent-workbench` 引用。

## 面试可讲点

- Agent UI 状态如何建模。
- 工具调用、执行轨迹、Artifact 如何组件化。
- 如何处理流式消息和长列表性能。
- 如何从业务项目沉淀组件库。
