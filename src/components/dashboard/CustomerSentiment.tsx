
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Activity, 
  AlertTriangle,
  Brain
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const customerSentimentData = [
  { month: 'Jan', sentiment: 72, satisfaction: 68 },
  { month: 'Feb', sentiment: 75, satisfaction: 71 },
  { month: 'Mar', sentiment: 78, satisfaction: 76 },
  { month: 'Apr', sentiment: 82, satisfaction: 79 },
  { month: 'May', sentiment: 85, satisfaction: 82 },
  { month: 'Jun', sentiment: 88, satisfaction: 85 },
];

export const CustomerSentiment = () => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Users className="w-5 h-5 mr-2 text-blue-600" />
          Customer Sentiment Analysis
        </h2>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-100 text-green-800">+12% This Quarter</Badge>
          <TrendingUp className="w-4 h-4 text-green-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Customer Metrics - Left Side */}
        <div className="col-span-12 lg:col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Overall Sentiment</p>
                  <p className="text-2xl font-bold text-blue-900">88%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Satisfaction Score</p>
                  <p className="text-2xl font-bold text-green-900">85%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 font-medium">Response Rate</p>
                  <p className="text-2xl font-bold text-amber-900">76%</p>
                </div>
                <Activity className="w-8 h-8 text-amber-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Customer Sentiment Chart - Center */}
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Customer Sentiment Trends</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={customerSentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Line type="monotone" dataKey="sentiment" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="satisfaction" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Insights - Right Side */}
        <div className="col-span-12 lg:col-span-3">
          <h3 className="text-sm font-medium text-slate-700 mb-4">Key Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-900">Positive Trend</span>
              </div>
              <p className="text-xs text-green-800">"Product quality feedback improved 15% this quarter"</p>
            </div>
            
            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-900">AI Insight</span>
              </div>
              <p className="text-xs text-blue-800">"Customer calls mention faster support response times"</p>
            </div>
            
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
                <span className="text-sm font-medium text-amber-900">Watch Area</span>
              </div>
              <p className="text-xs text-amber-800">"Pricing concerns mentioned in 8% of feedback"</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
