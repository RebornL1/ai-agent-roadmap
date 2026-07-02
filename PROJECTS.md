# 主线项目规划

这个仓库不是单个 demo，而是一个围绕高薪 AI 应用工程岗位设计的作品集型 monorepo。

## 项目推进顺序

优先级从高到低：

1. `dba-agent-workbench`
2. `dba-rag-assistant`
3. `mcp-db-toolkit`
4. `ai-agent-ui-components`
5. `cuda-npu-lab`

## 目录结构

```text
projects/
  dba-agent-workbench/
  dba-rag-assistant/
  mcp-db-toolkit/
  ai-agent-ui-components/
  cuda-npu-lab/
```

## 1. dba-agent-workbench

定位：AI Agent 前端工作台。

核心能力：

- 三栏布局：会话列表 / Chat / Agent 执行轨迹
- 流式输出
- 工具调用展示
- Human Approval
- 报告生成

为什么优先：

- 最容易形成可展示作品。
- 最贴近 AI Agent 前端岗位。
- 可以承接 RAG、MCP、LangGraph、工具审计等后续能力。

面试可讲点：

- AI Agent 产品前端如何组织信息架构。
- 如何展示 Agent 状态机和工具调用轨迹。
- 如何设计生产安全中的人工审批。

## 2. dba-rag-assistant

定位：数据库知识库问答。

核心能力：

- 上传 DBA 文档
- 文档切块 chunk
- embedding
- 向量检索
- 回答引用来源
- 找不到答案时拒答

为什么重要：

- RAG 是 AI 应用工程师必备能力。
- 可以利用你的 DBA 背景形成差异化。
- 后续可以作为 `dba-agent-workbench` 的知识检索能力。

面试可讲点：

- RAG 数据流：文档 -> chunk -> embedding -> vector store -> retrieval -> answer with citation。
- chunk 策略、召回质量、引用来源、bad case 评测。

## 3. mcp-db-toolkit

定位：数据库运维 MCP 工具集。

核心能力：

- 数据库健康检查工具
- 慢 SQL 分析工具
- 执行计划分析工具
- 只读 SQL 生成
- 工具权限和审计

为什么重要：

- MCP 是 AI Agent 工具接入的标准化方向。
- 能把你的 DBA 经验封装成可被 Agent 调用的工具。
- 是作品集里最能体现“懂业务 + 懂 AI 工程”的项目。

面试可讲点：

- MCP 和普通 REST API 的差异。
- 如何设计只读工具、危险动作审批和审计日志。
- 如何把 DBA 排障流程工具化。

## 4. ai-agent-ui-components

定位：AI Agent UI 组件库。

核心组件：

- AI Chat
- ToolCallCard
- AgentTimeline
- ArtifactPanel
- HumanApprovalCard
- CitationList

为什么重要：

- 证明你不只是会写页面，也会抽象可复用组件。
- 支撑多个项目复用同一套 AI-Native UI。
- 对 AI 前端岗位非常加分。

面试可讲点：

- 如何抽象 Agent UI 状态。
- 如何设计可复用、可测试、可组合的前端组件。
- 如何处理长消息、流式输出和工具状态更新。

## 5. cuda-npu-lab

定位：NPU 副线学习仓库。

核心内容：

- C++ 基础补强
- Linux 系统编程
- CUDA 入门
- mini runtime
- NPU Runtime 概念理解

为什么作为副线：

- 主线仍然是 AI Agent 前端和 AI 应用工程。
- 副线用于拓展字节 AI 芯片系统软件工程师 NPU 等更底层岗位可能性。
- 不抢主线时间，只做长期补课。

面试可讲点：

- 理解 AI 推理底层运行链路。
- 了解 GPU/NPU runtime、kernel、memory、调度等基础概念。
- 体现你有跨层学习能力。

## 当前推进规则

每天只推进一个项目，优先级如下：

1. 如果 `dba-agent-workbench` 没有形成完整 demo，优先推进它。
2. 当工作台有基础 UI 后，补 `dba-rag-assistant` 的最小 RAG 流程。
3. 当 RAG 可用后，做 `mcp-db-toolkit`，把 DBA 能力封装成工具。
4. 当多个项目出现重复 UI 时，再抽 `ai-agent-ui-components`。
5. `cuda-npu-lab` 每周固定补一次，不挤占主线。
