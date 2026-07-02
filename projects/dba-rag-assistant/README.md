# dba-rag-assistant

主线项目 2：数据库知识库问答。

## 项目目标

构建一个面向 DBA 场景的 RAG 问答助手，支持上传数据库运维文档、切块、向量化、检索，并在回答中引用来源。

这个项目用于证明 AI 应用工程能力：不是只会调用模型，而是能设计完整的知识库问答链路。

## 核心能力

- 上传 DBA 文档
- 文档解析和 chunk
- embedding
- 向量数据库检索
- 引用来源展示
- 找不到答案时拒答
- bad case 记录和评测

## 技术方向

- Next.js 或 FastAPI
- PostgreSQL + pgvector，或 Chroma / Milvus
- LangChain / LangGraph
- Vercel AI SDK

## MVP 验收标准

- 可以上传一份 DBA 文档。
- 可以完成 chunk 和 embedding。
- 可以针对数据库问题检索相关片段。
- 回答里能展示引用来源。
- 至少准备 10 个 DBA 测试问题。

## 面试可讲点

- RAG 数据流：文档 -> chunk -> embedding -> vector store -> retrieval -> answer with citation。
- chunk 粒度如何影响召回质量。
- 如何处理找不到答案、引用错误和幻觉问题。
- 如何把 DBA 知识沉淀成可检索资产。
