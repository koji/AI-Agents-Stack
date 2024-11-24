import frameworks from "./frameworks.json";
import hosting_and_serving from "./hosting_and_serving.json";
import memory from "./memory.json";
import modelServing from "./modelServing.json";
import observability from "./observability.json";
import sandboxes from "./sandboxes.json";
import storage from "./storage.json";
import tools from "./tools.json";
import verticalAgents from "./verticalAgents.json";

export const stackData = {
  verticalAgents: verticalAgents,
  hosting: hosting_and_serving,
  observability: observability ,
  frameworks:frameworks,
  memory: memory,
  tools: tools,
  sandboxes: sandboxes,
  modelServing: modelServing,
  storage:storage
};
