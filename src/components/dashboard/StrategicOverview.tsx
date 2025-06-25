
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  CheckCircle, 
  Target,
  DollarSign,
  Activity,
  Brain
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 850, target: 900 },
  { month: 'Feb', revenue: 920, target: 950 },
  { month: 'Mar', revenue: 1100, target: 1000 },
  { month: 'Apr', revenue: 1250, target: 1200 },
  { month: 'May', revenue: 1380, target: 1400 },
  { month: 'Jun', revenue: 1520, target: 1500 },
];

export const StrategicOverview = () => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Target className="w-5 h-5 mr-2 text-blue-600" />
          Strategic Overview
        </h2>
        <Badge className="bg-green-100 text-green-800">Healthy</Badge>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Key Metrics - Left Side */}
        <div className="col-span-12 lg:col-span-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Revenue Growth</p>
                  <p className="text-2xl font-bold text-blue-900">+18.5%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Customer Satisfaction</p>
                  <p className="text-2xl font-bold text-green-900">94%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 font-medium">On-Time Delivery</p>
                  <p className="text-2xl font-bold text-amber-900">95%</p>
                </div>
                <Activity className="w-8 h-8 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Chart - Center */}
        <div className="col-span-12 lg:col-span-5">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Revenue vs Target Trend</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="target" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#94a3b8', strokeWidth: 2, r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Goals Progress - Right Side */}
        <div className="col-span-12 lg:col-span-3">
          <h3 className="text-sm font-medium text-slate-700 mb-4">Q2 Goals Progress</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Revenue Target</span>
                <span className="text-sm font-medium text-slate-900">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Customer Acquisition</span>
                <span className="text-sm font-medium text-slate-900">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            
            {/* Harmony Engine Insight */}
            <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-xs font-medium text-purple-900">Harmony Engine</span>
              </div>
              <p className="text-xs text-purple-800">"Audio calls show 15% increase in Product X demand."</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
