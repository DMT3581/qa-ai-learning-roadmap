import { defineConfig } from 'vitepress'

// NOTE: titlurile exacte de capitole si categoriile 5 si 7 sunt marcate TBD.
// Actualizeaza aceasta sidebar cu titlurile reale din layer1-content-roadmap.md
// odata ce imi trimiti continutul acelui fisier.

export default defineConfig({
  title: 'Layer 1 - QA AI Adoption Layer 1',
  description: 'Curriculum intern de adoptie AI pentru echipa QA',
  lang: 'en-US',
  base: "/qa-ai-learning-roadmap/",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Roadmap', link: '/roadmap' }
    ],

    sidebar: [
      {
        text: '1. AI Fundamentals',
        collapsed: false,
        items: [
          { text: '1.1 What AI Is and How It Differs from Traditional Software', link: '/01-ai-fundamentals/1.1-what-ai-is-and-how-it-differs-from-traditional-software' },
          { text: '1.2 AI vs LLMs', link: '/01-ai-fundamentals/1.2-ai-vs-llms' },
          { text: '1.3 What Is a Large Language Model (LLM)?', link: '/01-ai-fundamentals/1.3-what-is-a-llm' },
          { text: '1.4 Types of AI models: generative vs. predictive; text/image/code/audio', link: '/01-ai-fundamentals/1.4-types-of-ai-models' },
          { text: '1.5 How AI models learn: training, fine-tuning, adaptation', link: '/01-ai-fundamentals/1.5-how-ai-models-learn' },
          { text: '1.6 Why AI is probabilistic', link: '/01-ai-fundamentals/1.6-why-ai-is-probabilistic' },
          { text: '1.7 Tokens explained', link: '/01-ai-fundamentals/1.7-tokens-explained' },
          { text: '1.8 Context windows and memory limitations', link: '/01-ai-fundamentals/1.8-context-window-and-memory-limitations' },
          { text: '1.9 Hallucinations: what they are and why they happen', link: '/01-ai-fundamentals/1.9-hallucination-verification' },
          { text: '1.10 Practical Limitations of AI', link: '/01-ai-fundamentals/1.10-practical-limitations-of-ai' }
        ]
      },
      {
        text: '2. Prompt and Context Engineering',
        collapsed: false,
        items: [
          { text: '1.1 Prompt anatomy: the building blocks of an effective prompt', link: '/02-prompting-core-skills/2.1-prompt-anatomy' },
          { text: '1.2 Prompt vs. Conversation: Choosing the Right Interaction Style', link: '/02-prompting-core-skills/2.2-prompt-vs-conversation' },
          { text: '1.3 Context Engineering: Giving AI the Right Information', link: '/02-prompting-core-skills/2.3-context-engineering' },
          { text: '1.4 Writing Clear Constraints and Instructions', link: '/02-prompting-core-skills/2.4-writing-clear-constraints-and-instructions' },
          { text: '1.5 Prompt Iteration: Improving Results Through Refinement', link: '/02-prompting-core-skills/2.5-prompt-iteration' },
          { text: '1.6 Advanced Prompting Techniques: Role, Few-Shot Examples and Structured Instructions', link: '/02-prompting-core-skills/2.6-advanced-prompting-techniques' },
          { text: '1.7 (TBD titlu)', link: '/02-prompting-core-skills/2.7-tbd'},
          { text: '1.8 Building and Maintaining a Personal Prompt Library', link: '/02-prompting-core-skills/2.8-building-and-maintaining-a-personal-prompt-library' },
        ]
      },
      {
        text: '3. Responsible AI Usage',
        collapsed: false,
        items: [
          // { text: '3.1 Confidentiality and Sensitive Data', link: '/03-policy-safety/3.1-confidentiality-and-sensitive-data' },
          // { text: '3.2 (TBD titlu)', link: '/03-policy-safety/3.2-tbd' },
          // { text: '3.3 (TBD titlu)', link: '/03-policy-safety/3.3-tbd' },
          // { text: '3.7 (TBD titlu)', link: '/03-policy-safety/3.7-tbd' }
        ]
      },
      {
        text: '4. AI Tools and Ecosystem (TBD)',
        collapsed: false,
        items: [
          // { text: '4.1 (TBD titlu)', link: '/04-ai-tools/4.1-tbd' },
          // { text: '4.2 (TBD titlu)', link: '/04-ai-tools/4.2-tbd' },
          // { text: '4.3 AI Tool Overview: ChatGPT / Claude / Gemini / Copilot', link: '/04-ai-tools/4.3-ai-tool-overview' },
          // { text: '4.4 (TBD titlu)', link: '/04-ai-tools/4.4-tbd' },
          // { text: '4.5 (TBD titlu)', link: '/04-ai-tools/4.5-tbd' }
        ]
      },
      {
        text: '5. Agents and Automation (TBD)',
        collapsed: true,
        items: [
          // { text: 'Wave 4 - de completat', link: '/05-responsible-use-habits/index' }
        ]
      },
      {
        text: '6. AI for QA and Daily Work (TBD)',
        collapsed: false,
        items: [
          // { text: '6.1 (TBD titlu)', link: '/06-qa-wins/6.1-tbd' },
          // { text: '6.2 (TBD titlu)', link: '/06-qa-wins/6.2-tbd' },
          // { text: '6.3 (TBD titlu)', link: '/06-qa-wins/6.3-tbd' },
          // { text: '6.4 (TBD titlu)', link: '/06-qa-wins/6.4-tbd' },
          // { text: '6.5 Building a Personal AI Workflow', link: '/06-qa-wins/6.5-building-a-personal-ai-workflow' }
        ]
      },
      {
        text: '7. Collaboration and Team Adoption (TBD)',
        collapsed: true,
        items: [
          // { text: 'Wave 5 - de completat', link: '/07-agents-collaboration/index' }
        ]
      },
      {
        text: '8. Mindset and Adoption (TBD)',
        collapsed: false,
        items: [
          // { text: '8.3 AI Does Not Replace Human Judgment', link: '/08-mindset-judgment/8.3-ai-does-not-replace-human-judgment' }
        ]
      }
    ],

    socialLinks: [],

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  },

markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    config: (md) => {
      const defaultRender = md.render.bind(md)
      md.render = (src, env) => {
        const escaped = src.replace(/\{\{/g, '&#123;&#123;').replace(/\}\}/g, '&#125;&#125;')
        return defaultRender(escaped, env)
      }
    }
  }

})
