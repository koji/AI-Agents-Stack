import hosting_and_serving from "./hosting_and_serving.json";
import observability from "./observability.json";
import memory from "./memory.json";
import modelServing from "./modelServing.json";
import storage from "./storage.json";

export const stackData = {
  verticalAgents: {
    title: "VERTICAL AGENTS",
    items: [
      { name: "Decagon", logos: ["https://placehold.co/200x50/png?text=Decagon"], url: "https://decagon.ai" },
      { name: "Sierra", logos: ["https://placehold.co/200x50/png?text=Sierra"], url: "https://sierra.ai" },
      { name: "Replit", logos: ["https://placehold.co/200x50/png?text=Replit"], url: "https://replit.com" },
      { name: "Perplexity", logos: ["https://placehold.co/200x50/png?text=Perplexity"], url: "https://perplexity.ai" },
      { name: "Harvey", logos: ["https://placehold.co/200x50/png?text=Harvey"], url: "https://harvey.ai" },
      { name: "MultiOn", logos: ["https://placehold.co/200x50/png?text=MultiOn"], url: "https://multion.ai" },
      { name: "Cognition", logos: ["https://placehold.co/200x50/png?text=Cognition"], url: "https://cognition.dev" },
      { name: "Factory", logos: ["https://placehold.co/200x50/png?text=Factory"], url: "https://factory.ai" },
      { name: "All Hands", logos: ["https://placehold.co/200x50/png?text=AllHands"], url: "https://allhands.ai" },
      { name: "Dosu", logos: ["https://placehold.co/200x50/png?text=Dosu"], url: "https://dosu.ai" },
      { name: "Lindy", logos: ["https://placehold.co/200x50/png?text=Lindy"], url: "https://lindy.ai" },
      { name: "11x", logos: ["https://placehold.co/200x50/png?text=11x"], url: "https://11x.ai" },
    ]
  },
  hosting: hosting_and_serving,
  observability: observability ,
  frameworks: {
    title: "AGENT FRAMEWORKS",
    items: [
      { name: "Letta", logos: ["https://placehold.co/200x50/png?text=Letta"], url: "https://letta.ai" },
      { name: "LangGraph", logos: ["https://placehold.co/200x50/png?text=LangGraph"], url: "https://python.langchain.com/docs/langgraph" },
      { name: "AutoGen", logos: ["https://placehold.co/200x50/png?text=AutoGen"], url: "https://microsoft.github.io/autogen" },
      { name: "LlamaIndex", logos: ["https://placehold.co/200x50/png?text=LlamaIndex"], url: "https://www.llamaindex.ai" },
      { name: "CrewAI", logos: ["https://placehold.co/200x50/png?text=CrewAI"], url: "https://www.crewai.io" },
      { name: "DSPy", logos: ["https://placehold.co/200x50/png?text=DSPy"], url: "https://dspy.ai" },
      { name: "Phidata", logos: ["https://placehold.co/200x50/png?text=Phidata"], url: "https://phidata.com" },
      { name: "Semantic Kernel", logos: ["https://placehold.co/200x50/png?text=SemanticKernel"], url: "https://learn.microsoft.com/semantic-kernel" },
      { name: "AutoGPT", logos: ["https://placehold.co/200x50/png?text=AutoGPT"], url: "https://autogpt.net" },
    ]
  },
  memory: memory,
  tools: {
    title: "TOOL LIBRARIES",
    items: [
      { name: "Composio", logos: ["https://placehold.co/200x50/png?text=Composio"], url: "https://composio.dev" },
      { name: "Browserbase", logos: ["https://placehold.co/200x50/png?text=Browserbase"], url: "https://browserbase.io" },
      { name: "Exa", logos: ["https://placehold.co/200x50/png?text=Exa"], url: "https://exa.ai" },
    ]
  },
  sandboxes: {
    title: "SANDBOXES",
    items: [
      { name: "E2B", logos: ["https://placehold.co/200x50/png?text=E2B"], url: "https://e2b.dev" },
      { name: "Modal", logos: ["https://placehold.co/200x50/png?text=Modal"], url: "https://modal.com" },
    ]
  },
  modelServing: modelServing,
  storage:storage
};
