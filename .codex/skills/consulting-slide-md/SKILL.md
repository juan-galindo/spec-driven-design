---
name: consulting-slide-md
description: Generate slide-by-slide Markdown outlines for executive presentations in a McKinsey-style consulting format. Use when Codex needs to turn product, business, design, strategy, research, roadmap, discovery, or technical planning content into a clear deck narrative using the Minto Pyramid Principle, action titles, concise communication, and audience-specific messaging for product, business, and design stakeholders.
---

# Consulting Slide MD

## Overview

Use this skill to create Markdown that can be used as the source narrative for a polished executive presentation. The output is not a PPTX file; it is a slide-by-slide Markdown deck blueprint with clear storyline, slide intent, action titles, supporting evidence, and visual direction.

## Core Method

Use the Minto Pyramid Principle:
1. Start with the answer or recommendation.
2. Group the supporting argument into 3 to 5 mutually distinct points.
3. Order slides so each point supports the governing thought.
4. Use evidence, examples, or implications to support each point.
5. End with decisions, next steps, or asks.

Every deck must have:
- A single governing thought.
- A logical storyline before the slide list.
- Slide titles that state the takeaway, not the topic.
- One main message per slide.
- Clear separation between facts, assumptions, implications, and recommendations.

## Workflow

1. Clarify the audience:
   - Product: emphasize user problems, product bets, roadmap, metrics, tradeoffs, and validation.
   - Business: emphasize growth, economics, market, risks, investment, and decisions.
   - Design: emphasize user needs, experience principles, journeys, content, research, and behavior change.
2. Define the decision or outcome the deck must drive.
3. Write the governing thought in one sentence.
4. Build the Minto storyline with 3 to 5 supporting pillars.
5. Create the slide-by-slide Markdown.
6. Add visual direction for each slide without designing the actual slides.
7. Finish with explicit decisions, risks, and next steps.

## Markdown Output Format

Use this exact structure:

```markdown
# [Deck Title]

## Audience
[Primary audience and secondary stakeholders]

## Decision / Outcome
[The decision, alignment, approval, or action the deck should drive]

## Governing Thought
[One-sentence answer-first message]

## Storyline
1. [Pillar 1]
2. [Pillar 2]
3. [Pillar 3]

---

## Slide 1: [Action title]

**Purpose:** [Why this slide exists]

**Message:** [One clear takeaway]

**Content:**
- [Bullet 1]
- [Bullet 2]
- [Bullet 3]

**Evidence / Inputs:**
- [Source, assumption, data point, research input, or analysis needed]

**Visual Direction:** [Chart, table, 2x2, journey, flow, scorecard, roadmap, architecture sketch, or simple text layout]

**Speaker Note:** [Short presenter note]
```

Repeat the slide block for every slide.

## Slide Standards

- Use action titles such as "The onboarding gap is concentrated in the first 10 minutes", not topic titles like "Onboarding".
- Keep slide messages direct and executive-readable.
- Prefer 3 to 5 bullets per slide.
- Use parallel structure across grouped slides.
- Make implications explicit.
- Do not bury the recommendation at the end if it is already known.
- Avoid decorative language, vague claims, and generic business jargon.

## Recommended Deck Patterns

Use one of these patterns unless the user provides a stronger structure:

- Recommendation deck: context, answer, rationale, options considered, recommendation, implementation, decision ask.
- Product strategy deck: market/user problem, product thesis, strategic bets, MVP scope, roadmap, metrics, risks.
- Research synthesis deck: research question, method, findings, implications, opportunities, recommendations.
- Design strategy deck: user need, experience gap, principles, journey, concept direction, validation plan.
- Business case deck: opportunity, customer/market, economics, scenarios, risks, investment ask.

## Quality Checks

Before finalizing, verify:
- The governing thought is clear and answer-first.
- Each slide supports the storyline.
- No slide has more than one main message.
- Titles communicate conclusions.
- The deck has a decision, ask, or next step.
- Product, business, and design concerns are balanced when the audience is cross-functional.

## Handoffs

- Use `$researcher` when claims need source validation or market/user evidence.
- Use `$business-analyst` when the deck needs business case, options, market sizing, or economics.
- Use `$product-strategist` when the deck needs product thesis, roadmap, MVP, or prioritization.
- Use `$content-designer` when the deck needs sharper wording, narrative, terminology, or UX copy.
- Use `$tech-lead` when the deck includes feasibility, architecture, implementation sequencing, or engineering risk.
