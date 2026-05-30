---
name: agent-harness
description: Multi-agent workflow evaluation and improvement for Codex skills. Use when Codex needs to design, test, review, score, or improve agent workflows that use the base roles researcher, business-analyst, product-strategist, content-designer, and tech-lead; especially for evaluating workflow quality, handoffs, evidence, reasoning, implementation readiness, and improvement actions.
---

# Agent Harness

## Overview

Use this skill as the orchestrator for evaluating and improving multi-agent workflows. Focus on workflow-level quality across the base role skills, not isolated prompt completions.

Base roles:
- `$researcher`
- `$business-analyst`
- `$product-strategist`
- `$content-designer`
- `$tech-lead`

## Workflow

1. Define the evaluation target:
   - Name the workflow being evaluated.
   - Identify participating base roles.
   - Define the expected final artifact, such as a strategy memo, product spec, technical plan, or multi-agent synthesis.
2. Create the evaluation scenario:
   - Define the user request or business problem.
   - Capture context, constraints, assumptions, and expected role contributions.
   - Specify what good looks like before evaluating the output.
3. Run role-based review:
   - Use `$researcher` to validate evidence, source quality, assumptions, and missing facts.
   - Use `$business-analyst` to evaluate business framing, options, risks, and decision logic.
   - Use `$product-strategist` to evaluate product direction, prioritization, MVP scope, and metrics.
   - Use `$content-designer` to evaluate clarity, narrative, terminology, and user-facing content.
   - Use `$tech-lead` to evaluate feasibility, architecture, implementation risk, and testability.
4. Score with the rubric.
5. Produce a concrete improvement plan.

## Rubric

Use these qualitative levels:
- `Strong`: Ready to rely on with minor or no revisions.
- `Acceptable`: Useful, but needs targeted improvement.
- `Weak`: Material gaps limit decision quality.
- `Missing`: Required element is absent.

Evaluate these dimensions:
- Role fit
- Evidence quality
- Reasoning quality
- Decision usefulness
- Cross-role handoff quality
- Implementation readiness
- Risk visibility

Assign issue severity as:
- `High`: Blocks confident use of the workflow or final artifact.
- `Medium`: Creates meaningful quality, clarity, or execution risk.
- `Low`: Worth improving but not blocking.

## Output Format

Provide:
- Evaluation target
- Scenario definition
- Participating roles
- Rubric results
- Findings by role
- Cross-role workflow issues
- Improvement recommendations
- Acceptance decision: `Pass`, `Pass with revisions`, or `Fail`
- Next evaluation scenario

## Improvement Guidance

Separate recommendations into:
- Quick fixes: prompt wording, missing checks, output formatting, clearer acceptance criteria.
- Skill changes: updates to role skill instructions, handoffs, rubrics, or standards.
- Process changes: workflow sequencing, review gates, scenario design, or validation strategy.

When recommending changes, state the affected role skill or workflow step, the problem, and the smallest concrete change that would improve the next run.

## Standards

- Keep findings evidence-based and specific.
- Do not over-score vague or unsupported outputs.
- Evaluate handoffs between roles, not just individual role quality.
- Prefer actionable recommendations over broad commentary.
- Match the user's language unless asked otherwise.
