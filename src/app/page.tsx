import { ModuleCard } from "../components/ModuleCard";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 lg:p-20">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Utility-First Dashboard</h1>
        <p className="text-slate-500 mt-2">Built entirely with functional CSS classes.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ModuleCard 
          title="Module 1" 
          description="Demonstrating conditional class handling and hover states without extra CSS." 
        />
        <ModuleCard 
          title="Module 2" 
          description="Built using utility-first principles for scalable UI." 
        />
        <ModuleCard 
          title="Module 3" 
          description="Responsive, reusable, and maintainable Tailwind components." 
        />
      </div>
    </div>
  );
}

export default Home;