import { Button } from "./ui/Button";

export const ModuleCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
      <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
        <div className="w-4 h-4 border-2 border-slate-800 rounded-sm" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-500 text-sm mt-2 leading-relaxed">{description}</p>
      </div>

      <div className="flex gap-2 mt-auto">
        <Button variant="outline">Settings</Button>
        <Button variant="primary" > Launch </Button> 
      </div>
    </div>
  );
};