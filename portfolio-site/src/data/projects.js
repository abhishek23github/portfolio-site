const projects = [
  {
    title: "Code Translator",
    image: "/images/code-translator.png",
    summary: "A GenAI-powered app that converts code from one language to another using GPT.",
    useCase: "Ideal for developers and learners needing fast cross-language code conversion.",
    features: [
      "Supports React, Python, JS, Java, and more",
      "Frontend: React + TypeScript",
      "Backend: Python with OpenAI API",
      "History & Manual Load feature"
    ],
    github: "https://github.com/abhishek23github/code-translator-frontend",
    demo: "",
  },
  {
    title: "Incident Analyzer",
    image: "/images/incident-analyzer.png",
    summary: "A Python desktop app to analyze ITSM incidents with GPT-powered summaries and SLA insights.",
    useCase: "Used by IT operations to track aging incidents, summarize timelines, and flag SLA breaches.",
    features: [
      "Filters by SLA %, assignment group, month/week",
      "Auto-summary of incidents using GPT",
      "Exports to CSV/Excel",
      "Graphs for trends and distribution"
    ],
    github: "https://github.com/abhishek23github/IncidentAnalyzer",
    demo: "",
  },
  {
    title: "Responsible AI Dashboard",
    image: "/images/responsible-ai-dashboard.png",
    summary: "A Streamlit dashboard for evaluating LLM output quality and risk using Responsible AI metrics.",
    useCase: "Helps GenAI teams compare outputs, detect bias/toxicity, and track hallucination risk.",
    features: [
      "Supports multiple LLMs for side-by-side comparison",
      "Analyzes bias, toxicity, relevance, coherence",
      "Exports results, shows radar charts",
      "Built with Python, Streamlit"
    ],
    github: "https://github.com/abhishek23github/responsible-ai-dashboard",
    demo: "",
  },
  {
    title: "LLM Playground App",
    image: "/images/llm-app.png",
    summary: "A lightweight interface to test and compare prompt responses across LLMs.",
    useCase: "Great for researchers, PMs, and devs experimenting with prompts and tuning outputs.",
    features: [
      "Multi-prompt and multi-model input",
      "Tabbed chat interface",
      "Clear, clean layout with minimal design",
      "Built with JavaScript + OpenAI API"
    ],
    github: "https://github.com/abhishek23github/llm-app",
    demo: "",
  },
  {
    title: "LLM UI Testing Platform", 
    image: "/images/llm-ui-testing.png",
    summary: "An app that auto-generates and runs Selenium-based UI test cases for broweser applications",
    useCase: "Ideal for developers or QA teams wanting to automate UI tests quickly without writing manual scripts.",
    features: [
      "Generates Selenium test cases from user inputs",
      "Supports multiple browsers",
      "Saves and runs tests with a single click",
      "Built with React, Node.js, and Selenium"
    ],
    github: "https://github.com/abhishek23github/llm-ui-tester",
    demo: "",
  }
];

export default projects;
