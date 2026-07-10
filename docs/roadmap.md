# AI Learning Roadmap

## Purpose

This roadmap defines **what to build, in what order, and in what content format** to complete the **Layer 1 AI curriculum** on the internal learning portal.

Its purpose is to:
- Coordinate content creation across the AI Ambassador team.
- Provide a clear implementation roadmap.
- Make progress measurable and trackable.
- Ensure foundational and high-risk topics are available before broad AI adoption.


## Coverage by Category

| Category | Total |
|----------|------:|
| 1. AI Fundamentals | 10 |
| 2. Prompt and Context Engineering | 8 |
| 3. Responsible AI Usage | 7 |
| 4. AI Tools and Ecosystem | 8 |
| 5. Agents and Automation | 5 |
| 6. AI for QA and Daily Work | 8 |
| 7. Collaboration and Team Adoption | 4 |
| 8. Mindset and Adoption | 4 |
| **Total** | **54** |


The curriculum places greater emphasis on **QA-specific AI use cases**. In particular, chapters covering **requirements analysis**, **test design**, and **test case generation** are expected to deliver the fastest and most visible productivity gains.

---

# Prioritization Framework

Content is prioritized using three criteria, applied in order:

1. **Risk / Blocking**
   - Content that must exist before employees are encouraged to use AI in real project work.
   - Example: confidentiality and handling client data.

2. **Foundational Dependencies**
   - Concepts that later chapters rely on.
   - Example: prompt engineering before advanced AI workflows.

3. **Adoption Impact for QA**
   - Practical topics that demonstrate immediate value and encourage adoption.
   - Example: AI-assisted test design and peer review.

> **Note:** Build order is **not** the same as teaching order.

Mindset-related chapters are intentionally scheduled later in the content creation plan because they have few dependencies. However, they are intended to be introduced early during the learning journey.


---

# Content Types

The portal uses three content formats:

| Type | Description |
|------|-------------|
| **Brief** | A concise, scannable reference covering a single concept. |
| **Guide** | A comprehensive walkthrough with explanations, examples, and recommended practices. |
| **Lab** | A hands-on exercise where learners complete practical tasks (for example using the Conduit application). |

All chapter IDs follow the **Category.Position** numbering used throughout the curriculum.

---

# Build Plan

Content is organized into priority waves.

Priority tiers correspond to implementation order:

| Priority | Meaning |
|----------|---------|
| **P0** | Critical — required before rollout |
| **P1** | Highest priority after blockers |
| **P2** | High-value practical adoption |
| **P3** | Intermediate depth and tooling |
| **P4** | Workflow optimization and responsible use completion |
| **P5** | Advanced topics, collaboration, and mindset |

## Wave 0 — Blocking (before any rollout) · P0

| ID | Chapter | Category | Dependencies |
|---|---|---|---|
| 3.1 | Confidentiality and sensitive data: what you can and cannot share | Responsible Use | None — write first |
| 1.1 | What AI is and how it differs from traditional software | Fundamentals | None |
| 1.2 | AI vs. LLMs | — | 1.1 |
| 1.3 | What is a Large Language Model (LLM) | — | 1.1 |
| 8.3 | AI does not replace human judgment | Mindset | None |

## Wave 1 — Core prompting skill + calibration · P1

| ID | Chapter | Category| Dependencies |
|---|---|---|---|
| 2.1 | Prompt anatomy: the building blocks of an effective prompt | Prompt & Context Eng. | None |
| 2.2 | Prompt vs. conversation: choosing the right interaction style | Prompt & Context Eng. | 2.1 |
| 2.5 | Prompt iteration: improving results through refinement | Prompt & Context Eng. | 2.1 |
| 2.3 | Context engineering: giving AI the right information | Prompt & Context Eng. | 2.1, 1.8 |
| 1.8 | Context windows and memory limitations *(Existing)* | Fundamentals | None |
| 2.4 | Writing clear constraints and instructions | Prompt & Context Eng. | 2.5 |
| 1.9 | Hallucinations: what they are and why they happen | — | None |
| 3.2 | Evaluating AI outputs: when to trust and when to verify | Responsible Use | 1.9 |
| 1.10 | Practical limitations of AI | Fundamentals | 1.9 |
| 1.6 | Why AI is probabilistic *(Existing)* | Fundamentals | None |
| 1.7 | Tokens explained *(Existing)* | Fundamentals | None |

## Wave 2 — Visible wins for QA · P2

| ID | Chapter | Category | Type | Dependencies |
|---|---|---|---|---|
| 6.2 | AI for test design and test case generation | AI for QA & Daily Work | Guide / Lab | 2.3, 2.5 |
| 6.3 | AI as a peer reviewer for your work | AI for QA & Daily Work | Guide / Lab | 2.5 |
| 6.1 | AI for requirements analysis and review | AI for QA & Daily Work | Guide | 2.3 |
| 6.4 | AI for documentation and knowledge capture | AI for QA & Daily Work | Guide | 2.5 |
| 3.3 | Fact-checking AI responses with external sources | Responsible Use | Guide | 3.2 |
| 3.7 | Common AI failure modes and how to detect them | Responsible Use | Guide | 3.2, 1.10 |

## Wave 3 — Prompting depth + tools · P3

| ID | Chapter | Category | Type | Dependencies |
|---|---|---|---|---|
| 2.6 | Advanced prompting: role, few-shot, structured instructions | Prompt & Context Eng. | Guide | 2.4, 2.5 |
| 2.8 | Building and maintaining a personal prompt library | Prompt & Context Eng. | Brief | 2.5 |
| 2.7 | Token-efficient prompting strategies *(Existing)* | Prompt & Context Eng. | — | 2.6 |
| 4.1 | Understanding AI tool categories and capabilities | Tools & Ecosystem | Brief | None |
| 4.2 | How to choose the right AI tool for a task | Tools & Ecosystem | Brief | 4.1 |
| 4.3 | AI tool overview: ChatGPT, Claude, Gemini, GitHub Copilot | Tools & Ecosystem | Brief | 4.2 |
| 4.4 | Model versions and why they matter | Tools & Ecosystem | Brief | None |
| 4.5 | Understanding tool limitations and documentation | Tools & Ecosystem | Brief | 1.10 |
| 4.6 | Harness tools: what a harness is and why it matters *(Existing)* | Tools & Ecosystem | — | 4.1 |
| 4.7 | GitHub Copilot premium requests *(Existing — needs periodic refresh)* | Tools & Ecosystem | — | 4.3 |
| 4.8 | GitHub Copilot tools and file structure *(Existing)* | Tools & Ecosystem | — | 4.3 |

## Wave 4 — Workflow + remaining responsible use · P4

| ID | Chapter | Category | Type | Dependencies |
|---|---|---|---|---|
| 6.5 | Building a personal AI workflow | AI for QA & Daily Work | Guide | 4.2, 6.3 |
| 6.6 | Integrating AI into daily work habits | AI for QA & Daily Work | Guide | 6.5 |
| 6.7 | Measuring personal productivity gains from AI | AI for QA & Daily Work | Guide | 6.5 |
| 6.8 | Cost vs. value: when AI is worth using | AI for QA & Daily Work | Brief | 6.7 |
| 3.4 | Intellectual property and copyright considerations | Responsible Use | Brief | None |
| 3.5 | AI ethics in everyday work | Responsible Use | Brief | None |
| 3.6 | Bias in AI: understanding and recognizing it | Responsible Use | Brief | None |

## Wave 5 — Agents, collaboration, mindset, nice-to-know fundamentals · P5

| ID | Chapter | Category | Type | Dependencies |
|---|---|---|---|---|
| 5.2 | Agent, skill and MCP fundamentals *(Existing)* | Agents & Automation | — | None |
| 5.1 | What an AI agent is and how it works | Agents & Automation | Brief | 5.2 |
| 5.4 | Model Context Protocol (MCP) in practice | Agents & Automation | Guide / Lab | 5.1, 5.2 |
| 5.3 | Plan → Review → Act workflow *(Existing)* | Agents & Automation | — | None |
| 5.5 | Human-in-the-loop automation | Agents & Automation | Brief | 5.3 |
| 7.1 | Giving feedback to improve responses within a conversation *(unwritten)* | Collaboration | Brief | 2.5 |
| 7.2 | Documenting and sharing effective prompts *(unwritten)* | Collaboration | Guide | 2.8 |
| 7.3 | Explaining AI-assisted work transparently to colleagues *(unwritten)* | Collaboration | Brief | None |
| 7.4 | Building team knowledge around AI usage *(unwritten)* | Collaboration | Guide | 7.2 |
| 1.4 | Types of AI models: generative vs. predictive; text/image/code/audio | Fundamentals | Brief | 1.1 |
| 1.5 | How AI models learn: training, fine-tuning, adaptation | Fundamentals | Brief | 1.1 |
| 8.1 | Overcoming resistance to AI adoption *(unwritten)* | Mindset | Brief | None |
| 8.2 | Setting realistic expectations for AI *(unwritten)* | Mindset | Brief | None |
| 8.4 | Developing an AI-augmented mindset *(unwritten)* | Mindset | Brief | 8.1, 8.2 |
