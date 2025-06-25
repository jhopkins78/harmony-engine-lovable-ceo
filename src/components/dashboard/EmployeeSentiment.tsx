
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Activity,
  Brain
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const employeeSentimentData = [
  { month: 'Jan', engagement: 78, satisfaction: 75, retention: 92 },
  { month: 'Feb', engagement: 80, satisfaction: 77, retention: 94 },
  { month: 'Mar', engagement: 82, satisfaction: 80, retention: 93 },
  { month: 'Apr', engagement: 85, satisfaction: 83, retention: 95 },
  { month: 'May', engagement: 87, satisfaction: 85, retention: 96 },
  { month: 'Jun', engagement: 90, satisfaction: 88, retention: 97 },
];

export const EmployeeSentiment = () => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Users className="w-5 h-5 mr-2 text-purple-600" />
          Employee Sentiment Analysis
        </h2>
        <div className="flex items-center space-x-2">
          <Badge className="bg-purple-100 text-purple-800">+8% This Quarter</Badge>
          <TrendingUp className="w-4 h-4 text-purple-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Employee Metrics - Left Side */}
        <div className="col-span-12 lg:col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Engagement</p>
                  <p className="text-2xl font-bold text-purple-900">90%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-600 font-medium">Satisfaction</p>
                  <p className="text-2xl font-bold text-indigo-900">88%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-teal-600 font-medium">Retention Rate</p>
                  <p className="text-2xl font-bold text-teal-900">97%</p>
                </div>
                <Activity className="w-8 h-8 text-teal-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Employee Sentiment Chart - Center */}
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Employee Engagement Trends</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={employeeSentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Line type="monotone" dataKey="engagement" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="satisfaction" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', strokeWidth: 2, r: 3 }} />
                <Line type="monotone" dataKey="retention" stroke="#14b8a6" strokeWidth={2} strokeDasharray="5 5" dot={{ fill: '#14b8a6', strokeWidth: 2, r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Employee Insights - Right Side */}
        <div className="col-span-12 lg:col-span-3">
          <h3 className="text-sm font-medium text-slate-700 mb-4">Key Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-900">Strong Growth</span>
              </div>
              <p className="text-xs text-purple-800">"Work-life balance initiatives showing positive impact"</p>
            </div>
            
            <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-900">AI Insight</span>
              </div>
              <p className="text-xs text-indigo-800">"Team emails show increased collaboration mentions"</p>
            </div>
            
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center mb-2">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-900">Achievement</span>
              </div>
              <p className="text-xs text-green-800">"Highest retention rate in company history"</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
