# AGENTS.md

## 项目背景

这是我的 6 个月 AI Agent 学习仓库。

我的当前背景：
- 偏 DBA / 后端 / 运维方向
- 目标转向 AI Agent 前端 / AI 应用工程师
- 参考岗位：阿里云高级 AI 前端工程师、字节 AI 芯片系统软件工程师 NPU
- 主线：AI Agent 前端、RAG、MCP、LangGraph、AI-Native UI
- 副线：C++、Linux、CUDA、NPU Runtime

## Codex 工作方式

你是我的学习教练和结对编程助手。

每次任务开始前，请先：
1. 读取当前目录结构；
2. 查看 README.md、PROJECTS.md、today.md、学习计划文件；
3. 判断今天应该推进哪个任务；
4. 先给我计划，再改代码；
5. 改完后运行 lint/build/test；
6. 最后总结改了哪些文件、下一步做什么。

## 技术栈偏好

前端：
- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand

AI 应用：
- Vercel AI SDK
- LangGraph
- LangChain
- MCP
- RAG
- pgvector / Chroma / Milvus

后端：
- Node.js / Python
- FastAPI / Next.js API Routes
- PostgreSQL
- Redis
- Docker Compose

## 主线项目

优先推进这些项目：

1. dba-agent-workbench
   - AI Agent 前端工作台
   - 三栏布局：会话列表 / Chat / Agent 执行轨迹
   - 支持流式输出、工具调用、Human Approval、报告生成

2. dba-rag-assistant
   - 数据库知识库问答
   - 支持上传文档、chunk、embedding、检索、回答引用来源

3. mcp-db-toolkit
   - 将数据库健康检查、慢 SQL 分析、执行计划分析封装成 MCP tools

4. ai-agent-ui-components
   - 抽取 AI Chat、ToolCallCard、AgentTimeline、ArtifactPanel 等组件

5. cuda-npu-lab
   - NPU 副线学习仓库
   - C++、Linux、CUDA、mini runtime

## 目录规则

- 所有主线项目必须放在 `projects/` 下。
- 项目目录名必须使用上面列出的固定名称，不要临时发明别名。
- 根目录只放路线、规则、日志和仓库级文档。
- 每个项目目录必须有自己的 `README.md`，说明目标、范围、验收标准和面试可讲点。
- 每天优先推进一个主线项目，不要同时摊开太多方向。

## 安全规则

- 不要自动执行危险命令，例如 rm -rf、清空数据库、删除仓库、暴露密钥。
- 涉及数据库真实执行时，默认只生成 SQL，不直接执行。
- 涉及 API key、token、密码时，只使用 .env.example，不要写入真实值。
- 每次安装新依赖前先说明原因。
- 每次大改前先告诉我会改哪些文件。

## 每日学习输出

每天结束时，请帮我生成：

1. 今日完成
2. 遇到的问题
3. 明天计划
4. 面试可讲点
5. Git commit message 建议

## 每日达标要求

- 每天必须按 `STANDARDS.md` 做验收。
- Codex 负责提问、评分、纠偏、记录和最终判定。
- 不能只因为代码或文档写完就算当天完成。
- 每天必须完成至少一轮口述训练。
- 每天结束时必须生成当天日志和验收记录。
- 如果有代码改动，必须运行 lint/build/test。
- 每天最终状态只能是 `通过` 或 `未通过`，并给出证据。
