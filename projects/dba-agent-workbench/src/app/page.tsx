const sessions = [
  {
    title: "CPU spike triage",
    tag: "prod-db-03",
    time: "09:42",
    status: "Running",
    preview: "Check host load, active sessions, and top SQL.",
  },
  {
    title: "Slow SQL review",
    tag: "order_core",
    time: "Yesterday",
    status: "Draft",
    preview: "Compare plan drift and missing index candidates.",
  },
  {
    title: "Replication lag",
    tag: "gaussdb-ha",
    time: "Mon",
    status: "Done",
    preview: "Build recovery checklist for primary/standby lag.",
  },
  {
    title: "Storage waterline",
    tag: "capacity",
    time: "Jun 30",
    status: "Done",
    preview: "Summarize growth trend and cleanup windows.",
  },
];

const messages = [
  {
    role: "User",
    body: "prod-db-03 CPU is above 92% for 18 minutes. Generate a DBA triage checklist and safe SQL probes.",
  },
  {
    role: "Agent",
    body: "I will separate host pressure, database sessions, slow SQL, lock waits, and recent changes before proposing recovery actions.",
  },
  {
    role: "Agent",
    body: "Initial signal: active sessions increased after the 09:20 release window. Next step is to inspect top SQL by elapsed time and CPU time.",
  },
];

const agentSteps = [
  {
    label: "Plan",
    status: "done",
    detail: "Classify incident scope and choose read-only diagnostics.",
  },
  {
    label: "Retrieve",
    status: "done",
    detail: "Loaded previous CPU spike runbook and SQL review notes.",
  },
  {
    label: "Call tool",
    status: "running",
    detail: "Running mock health_check and active_session_scan.",
  },
  {
    label: "Approval",
    status: "waiting",
    detail: "Waiting before any SQL that may touch production load.",
  },
  {
    label: "Report",
    status: "queued",
    detail: "Prepare incident summary and follow-up actions.",
  },
];

const toolCalls = [
  {
    name: "health_check",
    state: "completed",
    args: "target=prod-db-03, mode=read_only",
    result: "CPU high, IO normal, memory stable.",
  },
  {
    name: "active_session_scan",
    state: "running",
    args: "window=20m, group_by=sql_id",
    result: "Collecting top sessions.",
  },
  {
    name: "explain_sql",
    state: "approval",
    args: "sql_id=8f4a..., risk=low",
    result: "Human approval required.",
  },
];

const statusStyles: Record<string, string> = {
  Running: "border-sky-200 bg-sky-50 text-sky-700",
  Draft: "border-amber-200 bg-amber-50 text-amber-700",
  Done: "border-emerald-200 bg-emerald-50 text-emerald-700",
  done: "border-emerald-200 bg-emerald-50 text-emerald-700",
  running: "border-sky-200 bg-sky-50 text-sky-700",
  waiting: "border-amber-200 bg-amber-50 text-amber-700",
  queued: "border-zinc-200 bg-zinc-50 text-zinc-600",
  completed: "border-emerald-200 bg-emerald-50 text-emerald-700",
  approval: "border-rose-200 bg-rose-50 text-rose-700",
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex h-6 items-center rounded-md border px-2 text-xs font-medium ${
        statusStyles[status] ?? statusStyles.queued
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
            <h1 className="text-2xl font-semibold">DBA Agent Workbench</h1>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge status="Running" />
            <button className="h-9 rounded-md border border-zinc-300 bg-white px-3 text-sm font-medium text-zinc-800 shadow-sm">
              New case
            </button>
          </div>
        </header>

        <div className="grid flex-1 gap-4 py-4 lg:grid-cols-[280px_minmax(0,1fr)_360px]">
          <aside className="min-h-[280px] rounded-lg border border-zinc-200 bg-white">
            <div className="border-b border-zinc-200 px-4 py-3">
              <h2 className="text-sm font-semibold">Cases</h2>
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
                <h2 className="text-base font-semibold">CPU spike triage</h2>
                <p className="mt-1 text-sm text-zinc-500">Incident workspace / prod-db-03</p>
              </div>
              <button className="h-9 rounded-md bg-zinc-950 px-3 text-sm font-medium text-white">
                Export report
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
                  Message DBA Agent
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-2 text-xs text-zinc-500">
                    <span className="rounded-md border border-zinc-200 px-2 py-1">read-only</span>
                    <span className="rounded-md border border-zinc-200 px-2 py-1">mock data</span>
                  </div>
                  <button className="h-9 rounded-md bg-sky-700 px-3 text-sm font-medium text-white">
                    Queue mock run
                  </button>
                </div>
              </div>
            </div>
          </section>

          <aside className="grid min-h-[520px] gap-4">
            <section className="rounded-lg border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-4 py-3">
                <h2 className="text-sm font-semibold">Agent timeline</h2>
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
                <h2 className="text-sm font-semibold">Tool calls</h2>
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
      </div>
    </main>
  );
}
