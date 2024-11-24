import { FaCalendarDays } from "react-icons/fa6";
import { StackSection, sectionIcons } from './components/StackSection';
import { stackData } from './data/stackData';

function App() {
  console.log(stackData);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">AI Agents Stack</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <FaCalendarDays size={20} />
            <span>NOVEMBER 2024</span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Vertical Agents - Full Width */}
          <div className="md:col-span-2 lg:col-span-3">
            <StackSection
              title={stackData.verticalAgents.title}
              items={stackData.verticalAgents.items}
              icon={sectionIcons.vertical}
            />
          </div>

          {/* Hosting & Observability */}
          <div className="md:col-span-1">
            <StackSection
              title={stackData.hosting.title}
              items={stackData.hosting.items}
              icon={sectionIcons.hosting}
            />
          </div>
          <div className="md:col-span-1">
            <StackSection
              title={stackData.observability.title}
              items={stackData.observability.items}
              icon={sectionIcons.observability}
            />
          </div>

          {/* Frameworks - Full Width */}
          <div className="md:col-span-2 lg:col-span-3">
            <StackSection
              title={stackData.frameworks.title}
              items={stackData.frameworks.items}
              icon={sectionIcons.frameworks}
            />
          </div>

          {/* Memory, Tools, and Sandboxes */}
          <div className="md:col-span-1">
            <StackSection
              title={stackData.memory.title}
              items={stackData.memory.items}
              icon={sectionIcons.memory}
            />
          </div>
          <div className="md:col-span-1">
            <StackSection
              title={stackData.tools.title}
              items={stackData.tools.items}
              icon={sectionIcons.tools}
            />
          </div>
          <div className="md:col-span-1">
            <StackSection
              title={stackData.sandboxes.title}
              items={stackData.sandboxes.items}
              icon={sectionIcons.sandboxes}
            />
          </div>

          {/* Model Serving & Storage */}
          <div className="md:col-span-1 lg:col-span-2">
            <StackSection
              title={stackData.modelServing.title}
              items={stackData.modelServing.items}
              icon={sectionIcons.serving}
            />
          </div>
          <div className="md:col-span-1">
            <StackSection
              title={stackData.storage.title}
              items={stackData.storage.items}
              icon={sectionIcons.storage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
