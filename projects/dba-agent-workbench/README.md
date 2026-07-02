# dba-agent-workbench

Day 1 project for the AI Agent roadmap.

## Goal

Build a portfolio-ready AI Agent workbench for DBA incident workflows. The first version is a static Next.js mock that shows the product shape before connecting models, tools, RAG, or MCP.

## Day 1 Scope

- Next.js App Router
- TypeScript
- Tailwind CSS
- Three-pane workbench layout
- Mock conversation data
- Mock agent timeline
- Mock tool-call cards
- No real model calls
- No API keys
- No database execution

## Layout

- Left: case list
- Center: chat workspace
- Right: agent timeline and tool-call panel

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

## Next Milestones

1. Add fake streaming responses.
2. Add message state transitions.
3. Add human approval interaction.
4. Extract reusable Agent UI components.
5. Connect a read-only mock tool runner.

## Interview Talking Points

- Converts real DBA incident handling into an AI Agent product interface.
- Separates user chat, agent execution state, and tool-call audit trail.
- Keeps production safety visible through read-only and approval states.
- Establishes a UI foundation for RAG, MCP tools, and LangGraph later.
