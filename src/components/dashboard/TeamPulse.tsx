
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckCircle, 
  Activity, 
  AlertTriangle
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const teamSentimentData = [
  { department: 'Engineering', sentiment: 92 },
  { department: 'Sales', sentiment: 88 },
  { department: 'Marketing', sentiment: 85 },
  { department: 'Support', sentiment: 90 },
];

export const TeamPulse = () => {
  return (
    <Card className="col-span-12 lg:col-span-5 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-900 flex items-center">
          <Users className="w-5 h-5 mr-2 text-green-600" />
          Team Pulse
        </h2>
        <Badge className="bg-green-100 text-green-800">Strong</Badge>
      </div>

      {/* Team Sentiment Chart */}
      <div className="mb-4">
        <h3 className="text-sm font-medium text-slate-700 mb-3">Department Sentiment</h3>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={teamSentimentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="department" axisLine={false} tickLine={false} fontSize={10} />
              <YAxis axisLine={false} tickLine={false} fontSize={12} />
              <Bar dataKey="sentiment" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
          <div className="flex items-center">
            <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm text-green-800">Employee Feedback</span>
          </div>
          <span className="text-sm font-medium text-green-900">90%</span>
        </div>
        
        <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
          <div className="flex items-center">
            <Activity className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm text-blue-800">On-Time Projects</span>
          </div>
          <span className="text-sm font-medium text-blue-900">87%</span>
        </div>
        
        <div className="flex items-center justify-between p-2 bg-amber-50 rounded-lg">
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm text-amber-800">Client Concerns</span>
          </div>
          <span className="text-sm font-medium text-amber-900">2 Active</span>
        </div>
      </div>
    </Card>
  );
};
