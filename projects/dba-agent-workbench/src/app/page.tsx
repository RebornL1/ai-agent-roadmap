const sessions = [
  {
    title: "CPU 飙高排查",
    tag: "prod-db-03",
    time: "09:42",
    status: "运行中",
    preview: "检查主机负载、活跃会话和 Top SQL。",
  },
  {
    title: "慢 SQL 分析",
    tag: "order_core",
    time: "昨天",
    status: "草稿",
    preview: "对比执行计划变化，判断是否存在索引缺失。",
  },
  {
    title: "主备延迟",
    tag: "gaussdb-ha",
    time: "周一",
    status: "已完成",
    preview: "整理主备延迟恢复检查清单。",
  },
  {
    title: "存储水位风险",
    tag: "capacity",
    time: "6月30日",
    status: "已完成",
    preview: "汇总容量增长趋势和清理窗口。",
  },
];

const messages = [
  {
    role: "用户",
    body: "prod-db-03 的 CPU 已经连续 18 分钟超过 92%。请生成 DBA 排查清单和安全的只读诊断 SQL。",
  },
  {
    role: "Agent",
    body: "我会先区分主机资源压力、数据库会话、慢 SQL、锁等待和近期变更，再给出恢复建议。",
  },
  {
    role: "Agent",
    body: "初步信号：09:20 发布窗口后活跃会话明显增加。下一步建议查看按耗时和 CPU 时间排序的 Top SQL。",
  },
];

const agentSteps = [
  {
    label: "制定计划",
    status: "已完成",
    detail: "确认故障影响范围，并选择只读诊断动作。",
  },
  {
    label: "检索知识",
    status: "已完成",
    detail: "加载历史 CPU 飙高处理手册和 SQL Review 笔记。",
  },
  {
    label: "调用工具",
    status: "运行中",
    detail: "正在执行模拟 health_check 和 active_session_scan。",
  },
  {
    label: "人工审批",
    status: "等待审批",
    detail: "涉及生产负载的 SQL 执行前需要人工确认。",
  },
  {
    label: "生成报告",
    status: "排队中",
    detail: "准备输出故障摘要和后续整改建议。",
  },
];

const toolCalls = [
  {
    name: "health_check",
    state: "已完成",
    args: "target=prod-db-03, mode=read_only",
    result: "CPU 偏高，IO 正常，内存稳定。",
  },
  {
    name: "active_session_scan",
    state: "运行中",
    args: "window=20m, group_by=sql_id",
    result: "正在收集活跃会话 Top SQL。",
  },
  {
    name: "explain_sql",
    state: "需要审批",
    args: "sql_id=8f4a..., risk=low",
    result: "该动作需要人工审批后继续。",
  },
];

const trainingQuestions = [
  {
    title: "这个项目是什么？",
    checkpoint: "说出 AI Agent 前端工作台、DBA 故障处理、三栏布局、mock 数据和后续能力。",
  },
  {
    title: "为什么设计成三栏？",
    checkpoint: "说明左侧会话、中间对话、右侧执行轨迹和工具调用各自的价值。",
  },
  {
    title: "Agent 执行轨迹有什么价值？",
    checkpoint: "说出可见、可审计、可人工介入，不能只看最终回答。",
  },
  {
    title: "Human Approval 是什么？",
    checkpoint: "说出高风险动作前暂停、展示参数和风险、人工确认后继续。",
  },
  {
    title: "fake streaming 是什么？",
    checkpoint: "说出模拟逐字/分段输出，为真实 SSE 或 Vercel AI SDK 做准备。",
  },
];

const statusStyles: Record<string, string> = {
  运行中: "border-sky-200 bg-sky-50 text-sky-700",
  草稿: "border-amber-200 bg-amber-50 text-amber-700",
  已完成: "border-emerald-200 bg-emerald-50 text-emerald-700",
  等待审批: "border-amber-200 bg-amber-50 text-amber-700",
  排队中: "border-zinc-200 bg-zinc-50 text-zinc-600",
  需要审批: "border-rose-200 bg-rose-50 text-rose-700",
  未通过: "border-rose-200 bg-rose-50 text-rose-700",
  待训练: "border-zinc-200 bg-zinc-50 text-zinc-600",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium ${
        statusStyles[status] ?? statusStyles["排队中"]
      }`}
    >
      {status}
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f7f8] text-zinc-950">
      <div className="mx-auto flex min-h-screen w-full max-w-[1520px] flex-col px-4 py-4">
        <header className="flex min-h-14 flex-wrap items-center justify-between gap-3 border-b border-zinc-200 pb-4">
          <div>
            <p className="text-sm font-medium text-sky-700">dba-agent-workbench</p>
            <h1 className="text-2xl font-semibold">DBA Agent 工作台</h1>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status="运行中" />
            <button className="h-9 rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800 shadow-sm">
              新建案例
            </button>
          </div>
        </header>

        <div className="grid flex-1 gap-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)_360px]">
          <aside className="min-h-[280px] rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 px-4 py-3">
              <h2 className="text-sm font-semibold">故障案例</h2>
            </div>
            <div className="space-y-2 p-3">
              {sessions.map((session) => (
                <article
                  className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm first:border-sky-200 first:bg-sky-50/60"
                  key={session.title}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold">{session.title}</h3>
                      <p className="mt-1 text-xs text-zinc-500">{session.tag}</p>
                    </div>
                    <span className="text-xs text-zinc-500">{session.time}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{session.preview}</p>
                  <div className="mt-3">
                    <StatusBadge status={session.status} />
                  </div>
                </article>
              ))}
            </div>
          </aside>

          <section className="flex min-h-[520px] flex-col rounded-lg border border-zinc-200 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 px-5 py-4">
              <div>
                <h2 className="text-base font-semibold">CPU 飙高排查</h2>
                <p className="mt-1 text-sm text-zinc-500">故障工作区 / prod-db-03</p>
              </div>
              <button className="h-9 rounded-md bg-zinc-950 px-3 text-sm font-medium text-white">
                导出报告
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-hidden px-5 py-5">
              {messages.map((message) => {
                const isAgent = message.role === "Agent";

                return (
                  <div
                    className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
                    key={message.body}
                  >
                    <article
                      className={`max-w-[78%] rounded-lg border px-4 py-3 ${
                        isAgent
                          ? "border-zinc-200 bg-zinc-50"
                          : "border-sky-200 bg-sky-50"
                      }`}
                    >
                      <p className="text-xs font-semibold text-zinc-500">{message.role}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-800">{message.body}</p>
                    </article>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-zinc-200 p-4">
              <div className="rounded-lg border border-zinc-300 bg-white p-3">
                <p className="min-h-12 text-sm leading-6 text-zinc-500">
                  向 DBA Agent 发送消息
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2 text-xs text-zinc-500">
                    <span className="rounded-md border border-zinc-200 px-2 py-1">只读模式</span>
                    <span className="rounded-md border border-zinc-200 px-2 py-1">模拟数据</span>
                  </div>
                  <button className="h-9 rounded-md bg-sky-700 px-3 text-sm font-medium text-white">
                    加入模拟执行队列
                  </button>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid min-h-[520px] gap-4">
            <section className="rounded-lg border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-4 py-3">
                <h2 className="text-sm font-semibold">Agent 执行轨迹</h2>
              </div>
              <div className="space-y-3 p-4">
                {agentSteps.map((step) => (
                  <article className="rounded-lg border border-zinc-200 p-3" key={step.label}>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold">{step.label}</h3>
                      <StatusBadge status={step.status} />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{step.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-4 py-3">
                <h2 className="text-sm font-semibold">工具调用</h2>
              </div>
              <div className="space-y-3 p-4">
                {toolCalls.map((tool) => (
                  <article className="rounded-lg border border-zinc-200 p-3" key={tool.name}>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-mono text-sm font-semibold">{tool.name}</h3>
                      <StatusBadge status={tool.state} />
                    </div>
                    <p className="mt-3 font-mono text-xs leading-5 text-zinc-500">{tool.args}</p>
                    <p className="mt-2 text-sm leading-6 text-zinc-700">{tool.result}</p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>

        <section className="mb-4 rounded-lg border border-zinc-200 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 px-5 py-4">
            <div>
              <p className="text-sm font-medium text-sky-700">Day 2 学习模式</p>
              <h2 className="mt-1 text-lg font-semibold">今日必须过关的口述训练</h2>
            </div>
            <StatusBadge status="未通过" />
          </div>
          <div className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-5">
            {trainingQuestions.map((question, index) => (
              <article className="rounded-lg border border-zinc-200 p-3" key={question.title}>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-zinc-500">
                    Q{index + 1}
                  </span>
                  <StatusBadge status="待训练" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{question.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{question.checkpoint}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
