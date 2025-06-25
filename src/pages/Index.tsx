
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Target,
  Lightbulb,
  ArrowRight,
  Calendar,
  DollarSign,
  Activity,
  Brain
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 850, target: 900 },
  { month: 'Feb', revenue: 920, target: 950 },
  { month: 'Mar', revenue: 1100, target: 1000 },
  { month: 'Apr', revenue: 1250, target: 1200 },
  { month: 'May', revenue: 1380, target: 1400 },
  { month: 'Jun', revenue: 1520, target: 1500 },
];

const teamSentimentData = [
  { department: 'Engineering', sentiment: 92 },
  { department: 'Sales', sentiment: 88 },
  { department: 'Marketing', sentiment: 85 },
  { department: 'Support', sentiment: 90 },
];

const opportunityData = [
  { name: 'Product X Expansion', value: 35, color: '#3b82f6' },
  { name: 'New Market Entry', value: 25, color: '#10b981' },
  { name: 'Partnership Deals', value: 20, color: '#f59e0b' },
  { name: 'Cost Optimization', value: 20, color: '#8b5cf6' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Dashboard Grid */}
        <div className="grid grid-cols-12 gap-6 h-[calc(100vh-200px)]">
          
          {/* Strategic Overview - Top Left (30%) */}
          <Card className="col-span-12 lg:col-span-5 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center">
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Strategic Overview
              </h2>
              <Badge className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
            
            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-4 mb-6">
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

            {/* Revenue Trend Chart */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3">Revenue vs Target Trend</h3>
              <div className="h-32">
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

            {/* CEO Scorecard */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-slate-700">Q2 Goals Progress</h3>
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
            </div>

            {/* Harmony Engine Insights */}
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-900">Harmony Engine Insight</span>
              </div>
              <p className="text-sm text-purple-800">"Audio calls show 15% increase in Product X demand. Contract analysis reveals $200K savings opportunity in Q3."</p>
            </div>
          </Card>

          {/* Critical Decisions - Top Right (25%) */}
          <Card className="col-span-12 lg:col-span-4 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
                Critical Decisions
              </h2>
              <Badge variant="destructive" className="animate-pulse">3 Urgent</Badge>
            </div>

            <div className="space-y-4">
              {/* High Priority Decision */}
              <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-red-900">Supplier Contract Approval</h3>
                  <Badge variant="destructive" className="text-xs">High</Badge>
                </div>
                <p className="text-sm text-red-700 mb-3">New supplier contract needed to avoid Q3 delivery delays</p>
                <div className="flex items-center text-xs text-red-600 mb-3">
                  <DollarSign className="w-3 h-3 mr-1" />
                  <span>Could save $500K/month</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs">
                    Review Details
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    Delegate to VP
                  </Button>
                </div>
              </div>

              {/* Medium Priority Decision */}
              <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-amber-900">Marketing Investment</h3>
                  <Badge className="bg-amber-100 text-amber-800 text-xs">Medium</Badge>
                </div>
                <p className="text-sm text-amber-700 mb-3">Increase Product Y marketing spend for Q3 launch</p>
                <div className="flex items-center text-xs text-amber-600 mb-3">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span>Projected 25% revenue increase</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    View Analysis
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    Schedule Review
                  </Button>
                </div>
              </div>

              {/* Low Priority Decision */}
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-blue-900">Office Expansion</h3>
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Low</Badge>
                </div>
                <p className="text-sm text-blue-700 mb-3">Consider expanding Seattle office for growing team</p>
                <div className="flex items-center text-xs text-blue-600 mb-3">
                  <Users className="w-3 h-3 mr-1" />
                  <span>30% team growth projected</span>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  View Proposal
                </Button>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-indigo-600 mr-2" />
                <span className="text-sm font-medium text-indigo-900">AI Recommendation</span>
              </div>
              <p className="text-sm text-indigo-800">"Contract analysis suggests renegotiating supplier terms could reduce costs by 12%. Risk assessment: Low."</p>
            </div>
          </Card>

          {/* Team and Stakeholder Pulse - Bottom Left (25%) */}
          <Card className="col-span-12 lg:col-span-4 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center">
                <Users className="w-5 h-5 mr-2 text-green-600" />
                Team & Stakeholder Pulse
              </h2>
              <Badge className="bg-green-100 text-green-800">Strong</Badge>
            </div>

            {/* Team Morale */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3">Team Sentiment by Department</h3>
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
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm text-green-800">Employee Feedback</span>
                </div>
                <span className="text-sm font-medium text-green-900">90% Positive</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Activity className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm text-blue-800">Project Completion</span>
                </div>
                <span className="text-sm font-medium text-blue-900">87% On-Time</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mr-2" />
                  <span className="text-sm text-amber-800">Client Concerns</span>
                </div>
                <span className="text-sm font-medium text-amber-900">2 Active</span>
              </div>
            </div>

            {/* Stakeholder Insights */}
            <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border border-emerald-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-emerald-900">Stakeholder Intelligence</span>
              </div>
              <p className="text-sm text-emerald-800">"Email sentiment analysis shows 95% client satisfaction. Key client mentions expanding partnership in recent calls."</p>
            </div>
          </Card>

          {/* Future Opportunities - Bottom Right (20%) */}
          <Card className="col-span-12 lg:col-span-3 p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                Future Opportunities
              </h2>
              <Badge className="bg-yellow-100 text-yellow-800">4 New</Badge>
            </div>

            {/* Opportunity Distribution */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-slate-700 mb-3">Growth Opportunities</h3>
              <div className="h-32 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={opportunityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={50}
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

            {/* Opportunity List */}
            <div className="space-y-3 mb-6">
              {opportunityData.map((opportunity, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div 
                      className="w-3 h-3 rounded-full mr-3" 
                      style={{ backgroundColor: opportunity.color }}
                    ></div>
                    <span className="text-sm text-slate-700">{opportunity.name}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{opportunity.value}%</span>
                </div>
              ))}
            </div>

            {/* Growth Projections */}
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-800">Product X Expansion</span>
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-xs text-blue-700 mt-1">+20% revenue potential</p>
              </div>
              
              <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-800">Eco-Friendly Line</span>
                  <Lightbulb className="w-4 h-4 text-purple-600" />
                </div>
                <p className="text-xs text-purple-700 mt-1">Emerging customer demand</p>
              </div>
            </div>

            {/* Predictive Insights */}
            <div className="p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-100">
              <div className="flex items-center mb-2">
                <Brain className="w-4 h-4 text-violet-600 mr-2" />
                <span className="text-sm font-medium text-violet-900">Predictive Analysis</span>
              </div>
              <p className="text-sm text-violet-800">"Market trends suggest Q4 growth in sustainable products. Supply chain analysis predicts optimal expansion timing."</p>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Index;
