
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Activity,
  Brain
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const executiveSentimentData = [
  { quarter: 'Q1', confidence: 82, alignment: 85, performance: 88 },
  { quarter: 'Q2', confidence: 85, alignment: 88, performance: 90 },
  { quarter: 'Q3', confidence: 88, alignment: 90, performance: 92 },
  { quarter: 'Q4', confidence: 90, alignment: 92, performance: 94 },
];

export const ExecutiveTeamAnalysis = () => {
  return (
    <Card className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Target className="w-5 h-5 mr-2 text-orange-600" />
          Executive Team Analysis
        </h2>
        <div className="flex items-center space-x-2">
          <Badge className="bg-orange-100 text-orange-800">+6% This Quarter</Badge>
          <TrendingUp className="w-4 h-4 text-orange-600" />
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        {/* Executive Metrics - Left Side */}
        <div className="col-span-12 lg:col-span-3">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Leadership Confidence</p>
                  <p className="text-2xl font-bold text-orange-900">90%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-red-600 font-medium">Strategic Alignment</p>
                  <p className="text-2xl font-bold text-red-900">92%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-red-600" />
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-pink-600 font-medium">Performance Score</p>
                  <p className="text-2xl font-bold text-pink-900">94%</p>
                </div>
                <Activity className="w-8 h-8 text-pink-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Executive Team Chart - Center */}
        <div className="col-span-12 lg:col-span-6">
          <h3 className="text-sm font-medium text-slate-700 mb-3">Executive Performance Trends</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={executiveSentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="quarter" axisLine={false} tickLine={false} fontSize={12} />
                <YAxis axisLine={false} tickLine={false} fontSize={12} />
                <Bar dataKey="confidence" fill="#f97316" radius={[4, 4, 0, 0]} />
                <Bar dataKey="alignment" fill="#dc2626" radius={[4, 4, 0, 0]} />
                <Bar dataKey="performance" fill="#ec4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Executive Insights - Right Side */}
        <div className="col-span-12 lg:col-span-3">
          <h3 className="text-sm font-medium text-slate-700 mb-4">Leadership Insights</h3>
          <div className="space-y-3">
            <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-sm font-medium text-orange-900">Strong Leadership</span>
              </div>
              <p className="text-xs text-orange-800">"Executive team shows consistent growth in all metrics"</p>
            </div>
            
            <div className="p-3 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-red-600 mr-2" />
                <span className="text-sm font-medium text-red-900">Strategic Focus</span>
              </div>
              <p className="text-xs text-red-800">"Meeting transcripts show increased strategic alignment"</p>
            </div>
            
            <div className="p-3 bg-pink-50 rounded-lg border border-pink-100">
              <div className="flex items-center mb-2">
                <Target className="w-4 h-4 text-pink-600 mr-2" />
                <span className="text-sm font-medium text-pink-900">Goal Achievement</span>
              </div>
              <p className="text-xs text-pink-800">"94% of quarterly objectives met or exceeded"</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
