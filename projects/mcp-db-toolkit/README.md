# mcp-db-toolkit

主线项目 3：数据库运维 MCP 工具集。

## 项目目标

把 DBA 日常排障能力封装成 MCP tools，让 AI Agent 可以通过标准化协议调用数据库健康检查、慢 SQL 分析、执行计划分析等能力。

这个项目用于证明你能把业务经验工具化，并理解 Agent 工具调用、安全和审计。

## 核心能力

- 数据库健康检查
- 慢 SQL 分析
- 执行计划分析
- 死锁诊断
- 主备延迟诊断
- 只读 SQL 生成
- 工具调用审计
- 危险操作默认拒绝或需要人工审批

## 技术方向

- MCP Server
- Node.js / Python
- Zod / Pydantic 参数校验
- PostgreSQL / GaussDB 只读连接
- 审计日志

## MVP 验收标准

- 本地 MCP Server 能启动。
- 至少暴露 3 个只读工具。
- 每个工具都有 schema、输入校验和示例输出。
- 工具调用有日志记录。
- README 写清安全边界。

## 面试可讲点

- MCP 和普通 REST API 的区别。
- 为什么数据库工具必须默认只读。
- 如何设计工具参数 schema、权限控制和审计。
- 如何把 DBA 排障流程结构化成 Agent 可调用工具。
