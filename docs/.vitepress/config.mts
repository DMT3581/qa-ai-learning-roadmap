import { defineConfig } from 'vitepress'

// NOTE: titlurile exacte de capitole si categoriile 5 si 7 sunt marcate TBD.
// Actualizeaza aceasta sidebar cu titlurile reale din layer1-content-roadmap.md
// odata ce imi trimiti continutul acelui fisier.

export default defineConfig({
  title: 'QA AI Adoption Layer 1',
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
          { text: '1.1 What AI Is', link: '/01-ai-fundamentals/1.1-what-ai-is-and-how-it-differs-from-traditional-software' },
          { text: '1.2 AI vs LLMs', link: '/01-ai-fundamentals/1.2-ai-vs-llms' },
          { text: '1.3 What Is a LLM?', link: '/01-ai-fundamentals/1.3-what-is-a-llm' },
          { text: '1.4 Types of AI models', link: '/01-ai-fundamentals/1.4-types-of-ai-models' },
          { text: '1.5 How AI models learn', link: '/01-ai-fundamentals/1.5-how-ai-models-learn' },
          { text: '1.6 Why AI is probabilistic', link: '/01-ai-fundamentals/1.6-why-ai-is-probabilistic' },
          { text: '1.7 Tokens explained', link: '/01-ai-fundamentals/1.7-tokens-explained' },
          { text: '1.8 Context windows and memory limitations', link: '/01-ai-fundamentals/1.8-context-windows' },
          { text: '1.9 Hallucinations', link: '/01-ai-fundamentals/1.9-hallucinations' },
          { text: '1.10 Practical Limitations of AI', link: '/01-ai-fundamentals/1.10-practical-limitations-of-ai' }
        ]
      },
      {
        text: '2. Prompt and Context Engineering',
        collapsed: true,
        items: [
          { text: '2.1 Prompt anatomy', link: '/02-prompting-core-skills/2.1-prompt-anatomy' },
          { text: '2.2 Prompt vs. Conversation', link: '/02-prompting-core-skills/2.2-prompt-vs-conversation' },
          { text: '2.3 Context Engineering', link: '/02-prompting-core-skills/2.3-context-engineering' },
          { text: '2.4 Writing Clear Constraints', link: '/02-prompting-core-skills/2.4-writing-clear-constraints-and-instructions' },
          { text: '2.5 Prompt Iteration', link: '/02-prompting-core-skills/2.5-prompt-iteration' },
          { text: '2.6 Advanced Prompting', link: '/02-prompting-core-skills/2.6-advanced-prompting-techniques' },
          { text: '2.7 Token-Efficient Prompting', link: '/02-prompting-core-skills/2.7-token-efficient-prompting' },
          { text: '2.8 Building and Maintaining a Personal Prompt Library', link: '/02-prompting-core-skills/2.8-building-and-maintaining-a-personal-prompt-library' },
        ]
      },
      {
        text: '3. Responsible AI Usage',
        collapsed: true,
        items: [
          { text: '3.1 Confidentiality and Sensitive Data', link: '/03-policy-safety/3.1-confidentiality-and-sensitive-data' },
          { text: '3.2 Evaluating AI Outputs', link: '/03-policy-safety/3.2-evaluating-ai-outputs' },
          { text: '3.3 Fact-Checking AI Responses with External Sources', link: '/03-policy-safety/3.3-fact-checking-ai-responses' },
          { text: '3.4 Intellectual Property', link: '/03-policy-safety/3.4-intellectual-property' },
          { text: '3.5 AI Ethics', link: '/03-policy-safety/3.5-ai-ethics' },
          { text: '3.6 Bias in AI', link: '/03-policy-safety/3.6-bias-in-ai' },
          { text: '3.7 Common AI Failure Modes', link: '/03-policy-safety/3.7-common-ai-failure-modes' }
        ]
      },
      {
        text: '4. AI Tools and Ecosystem',
        collapsed: true,
        items: [
          { text: '4.1 Understanding AI Tool Categories and Capabilities', link: '/04-ai-tools/4.1-understanding-ai-tool-categories-and-capabilities' },
          { text: '4.2 How to Choose the Right AI Tool for a Task', link: '/04-ai-tools/4.2-how-to-choose-the-right-ai-tool' },
          { text: '4.3 AI Tool Overview', link: '/04-ai-tools/4.3-ai-tool-overview' },
          { text: '4.4 Model Versions', link: '/04-ai-tools/4.4-model-versions' },
          { text: '4.5 Tool Limitations and Documentation', link: '/04-ai-tools/4.5-tool-limitations-and-documentation' },
          { text: '4.6 Harness Tools', link: '/04-ai-tools/4.6-harness-tools' },
          { text: '4.7 Github Copilot Premium Requests', link: '/04-ai-tools/4.7-github-copilot-premium-requests' },
          { text: '4.8 GitHub Copilot Tools and File Structure', link: '/04-ai-tools/4.8-github-copilot-tools-and-file-structure' }
        ]
      },
      {
        text: '5. Agents and Automation',
        collapsed: true,
        items: [
          { text: '5.1 What Is an AI Agent', link: '/05-agents-automation/5.1-what-is-an-ai-agent' },
          { text: '5.2 Agent, Skill and MCP', link: '/05-agents-automation/5.2-agent-skill-mcp' },
          { text: '5.3 Plan → Review → Act', link: '/05-agents-automation/5.3-plan-review-act' },
          { text: '5.4 MCP in Practice', link: '/05-agents-automation/5.4-mcp-in-practice' },
          { text: '5.5 Human-in-the-Loop Automation', link: '/05-agents-automation/5.5-human-in-the-loop' }
        ]
      },
      {
        text: '6. AI for QA and Daily Work',
        collapsed: true,
        items: [
          { text: '6.1 AI for Requirements Analysis and Review', link: '/06-qa-wins/6.1-ai-for-req-analysis-and-review' },
          { text: '6.2 AI for Test Design and Test Case Generation', link: '/06-qa-wins/6.2-ai-for-td-and-tc-generation' },
          { text: '6.3 AI as a Peer Reviewer', link: '/06-qa-wins/6.3-ai-as-peer-reviewer' },
          { text: '6.4 AI for Documentation and Knowledge Capture', link: '/06-qa-wins/6.4-ai-for-documentation' },
          { text: '6.5 Building a Personal AI Workflow', link: '/06-qa-wins/6.5-building-a-personal-ai-workflow' },
          { text: '6.6 Integrating AI into Daily Work Habits', link: '/06-qa-wins/6.6-integrating-ai-into-daily-work' },
          { text: '6.7 Measuring Personal Productivity Gains from AI', link: '/06-qa-wins/6.7-measuring-prod-gains-from-ai' },
          { text: '6.8 Cost vs Value: When AI Is Worth Using', link: '/06-qa-wins/6.8-cost-vs-value' },
        ]
      },
      {
        text: '7. Collaboration and Team Adoption',
        collapsed: true,
        items: [
          { text: '7.1 Giving Feedback to Improve Responses Within a Conversation', link: '/07-agents-collaboration/7.1-giving-feedback-to-improve-responses' },
          { text: '7.2 Documenting and Sharing Effective Prompts', link: '/07-agents-collaboration/7.2-documenting-effective-prompts' },
          { text: '7.3 Explaining AI-assisted work to colleagues', link: '/07-agents-collaboration/7.3-explaining-ai-assisted-work' },
          { text: '7.4 Building Team Knowledge Around AI Usage', link: '/07-agents-collaboration/7.4-building-team-knowledge' }
        ]
      },
      {
        text: '8. Mindset and Adoption ',
        collapsed: true,
        items: [
          { text: '8.1 Overcoming Resistance to AI Adoption', link: '/08-mindset-judgment/8.1-overcoming-resistance-to-ai-adoption' },
          { text: '8.2 Setting Realistic Expectations for AI', link: '/08-mindset-judgment/8.2-setting-realistic-expectations-for-ai' },
          { text: '8.3 AI Does Not Replace Human Judgment', link: '/08-mindset-judgment/8.3-ai-does-not-replace-human' },
          { text: '8.4 Developing an AI-Augmented Mindset', link: '/08-mindset-judgment/8.4-developing-ai-mindset' }
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
