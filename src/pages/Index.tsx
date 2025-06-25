
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StrategicOverview } from "@/components/dashboard/StrategicOverview";
import { CriticalDecisions } from "@/components/dashboard/CriticalDecisions";
import { TeamPulse } from "@/components/dashboard/TeamPulse";
import { CustomerSentiment } from "@/components/dashboard/CustomerSentiment";
import { EmployeeSentiment } from "@/components/dashboard/EmployeeSentiment";
import { ExecutiveTeamAnalysis } from "@/components/dashboard/ExecutiveTeamAnalysis";
import { FutureOpportunities } from "@/components/dashboard/FutureOpportunities";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />

        {/* Dashboard Grid - Horizontally Oriented Layout */}
        <div className="space-y-6">
          
          {/* Top Row - Strategic Overview (Full Width) */}
          <StrategicOverview />

          {/* Middle Row - Critical Decisions & Team Pulse */}
          <div className="grid grid-cols-12 gap-6">
            <CriticalDecisions />
            <TeamPulse />
          </div>

          {/* Customer Sentiment Analysis */}
          <CustomerSentiment />

          {/* Employee Sentiment Analysis */}
          <EmployeeSentiment />

          {/* Executive Team Analysis */}
          <ExecutiveTeamAnalysis />

          {/* Bottom Row - Future Opportunities */}
          <FutureOpportunities />

        </div>
      </div>
    </div>
  );
};

export default Index;
