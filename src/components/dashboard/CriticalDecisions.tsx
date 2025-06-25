
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  DollarSign,
  Brain
} from "lucide-react";

export const CriticalDecisions = () => {
  return (
    <Card className="col-span-12 lg:col-span-7 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
          Critical Decisions
        </h2>
        <Badge variant="destructive" className="animate-pulse">3 Urgent</Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* High Priority Decision */}
        <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-red-900 text-sm">Supplier Contract</h3>
            <Badge variant="destructive" className="text-xs">High</Badge>
          </div>
          <p className="text-xs text-red-700 mb-2">Avoid Q3 delivery delays</p>
          <div className="flex items-center text-xs text-red-600 mb-3">
            <DollarSign className="w-3 h-3 mr-1" />
            <span>Save $500K/month</span>
          </div>
          <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs w-full">
            Review Details
          </Button>
        </div>

        {/* Medium Priority Decision */}
        <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-amber-900 text-sm">Marketing Investment</h3>
            <Badge className="bg-amber-100 text-amber-800 text-xs">Medium</Badge>
          </div>
          <p className="text-xs text-amber-700 mb-2">Product Y Q3 launch</p>
          <div className="flex items-center text-xs text-amber-600 mb-3">
            <TrendingUp className="w-3 h-3 mr-1" />
            <span>+25% revenue</span>
          </div>
          <Button size="sm" variant="outline" className="text-xs w-full">
            View Analysis
          </Button>
        </div>

        {/* Low Priority Decision */}
        <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-medium text-blue-900 text-sm">Office Expansion</h3>
            <Badge className="bg-blue-100 text-blue-800 text-xs">Low</Badge>
          </div>
          <p className="text-xs text-blue-700 mb-2">Seattle office growth</p>
          <div className="flex items-center text-xs text-blue-600 mb-3">
            <Users className="w-3 h-3 mr-1" />
            <span>30% team growth</span>
          </div>
          <Button size="sm" variant="outline" className="text-xs w-full">
            View Proposal
          </Button>
        </div>
      </div>

      {/* AI Recommendation */}
      <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
        <div className="flex items-center mb-2">
          <Brain className="w-4 h-4 text-indigo-600 mr-2" />
          <span className="text-sm font-medium text-indigo-900">AI Recommendation</span>
        </div>
        <p className="text-sm text-indigo-800">"Contract analysis suggests renegotiating supplier terms could reduce costs by 12%. Risk assessment: Low."</p>
      </div>
    </Card>
  );
};
