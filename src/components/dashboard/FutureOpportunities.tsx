
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  TrendingUp,
  Brain
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const opportunityData = [
  { name: 'Product X Expansion', value: 35, color: '#3b82f6' },
  { name: 'New Market Entry', value: 25, color: '#10b981' },
  { name: 'Partnership Deals', value: 20, color: '#f59e0b' },
  { name: 'Cost Optimization', value: 20, color: '#8b5cf6' },
];

export const FutureOpportunities = () => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
          Future Opportunities
        </h2>
        <Badge className="bg-yellow-100 text-yellow-800">4 New</Badge>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Opportunity Distribution Chart - Left */}
        <div className="col-span-12 lg:col-span-4">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Growth Distribution</h3>
          <div className="h-40 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={opportunityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {opportunityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Opportunity Details - Center */}
        <div className="col-span-12 lg:col-span-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Growth Opportunities</h3>
          <div className="grid grid-cols-2 gap-3">
            {opportunityData.map((opportunity, index) => (
              <div key={index} className="p-3 hover:bg-slate-50 rounded-lg transition-colors border border-slate-100">
                <div className="flex items-center mb-2">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: opportunity.color }}
                  ></div>
                  <span className="text-sm font-medium text-slate-900">{opportunity.value}%</span>
                </div>
                <span className="text-xs text-slate-700">{opportunity.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Projections - Right */}
        <div className="col-span-12 lg:col-span-3">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Key Projections</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-800">Product X</span>
                <TrendingUp className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-xs text-blue-700 mt-1">+20% revenue potential</p>
            </div>
            
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm text-purple-800">Eco-Friendly</span>
                <Lightbulb className="w-4 h-4 text-purple-600" />
              </div>
              <p className="text-xs text-purple-700 mt-1">Emerging demand</p>
            </div>

            {/* Predictive Insights */}
            <div className="p-3 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-violet-600 mr-2" />
                <span className="text-xs font-medium text-violet-900">Predictive Analysis</span>
              </div>
              <p className="text-xs text-violet-800">"Q4 growth in sustainable products predicted. Optimal expansion timing identified."</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
