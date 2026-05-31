# Project Agent Structure

This project uses Codex skills as specialized agents. Project-local skills live under `.codex/skills/<skill-name>/SKILL.md` and optional UI metadata lives under `.codex/skills/<skill-name>/agents/openai.yaml`.

## Available Skills

- `$researcher`: gather evidence, compare sources, validate assumptions, and summarize implications.
- `$business-analyst`: structure business problems, evaluate options, size opportunities, and prepare decision-ready recommendations.
- `$product-strategist`: define product direction, positioning, MVP scope, roadmap, metrics, and validation plan.
- `$design-strategist`: define experience direction, design principles, user journeys, and strategic design opportunities.
- `$content-designer`: design product narrative, UX writing, terminology, messaging hierarchy, and user-facing copy.
- `$tech-lead`: assess feasibility, architecture, implementation sequencing, risks, and verification plan.
- `$agent-harness`: orchestrate workflow-level evaluation and improvement across the base role skills.
- `$slides-structurer`: generate slide-by-slide Markdown for executive presentations using Minto Pyramid structure and clear consulting-style communication.

## Default Workflow

For discovery or specification work, prefer this sequence:

1. Use `$researcher` to gather and validate evidence.
2. Use `$business-analyst` to frame the business problem and strategic options.
3. Use `$product-strategist` to define product strategy, scope, and roadmap.
4. Use `$design-strategist` to define the experience direction, design principles, and journey implications.
5. Use `$content-designer` to shape narrative and user-facing content.
6. Use `$tech-lead` to translate the strategy into a buildable technical plan.

For evaluating or improving the agent workflow itself, use `$agent-harness` after a role-based workflow produces an artifact. It should review role fit, evidence quality, reasoning, handoffs, implementation readiness, risks, and improvement actions.

For presentation planning, use `$slides-structurer` to convert strategy, product, business, design, research, or technical content into a slide-by-slide Markdown deck blueprint before creating slides.

## Working Rules

- Keep assumptions explicit.
- Separate facts, estimates, hypotheses, and open questions.
- Prefer concise, decision-ready outputs over long narrative.
- Match the user's language unless asked otherwise.
- Use the existing project structure and avoid adding unrelated documentation.
