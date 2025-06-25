
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Activity, 
  Calendar
} from "lucide-react";

export const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Harmony Engine CEO Dashboard</h1>
          <p className="text-slate-600">Strategic Command Center • Real-time Business Intelligence</p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <Activity className="w-4 h-4 mr-1" />
            All Systems Operational
          </Badge>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            <Calendar className="w-4 h-4 mr-1" />
            Q2 2024
          </Badge>
        </div>
      </div>
      <Separator />
    </div>
  );
};
