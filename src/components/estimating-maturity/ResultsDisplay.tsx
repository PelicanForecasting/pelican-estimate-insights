import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon, MailIcon, CalendarIcon, FileText, ChevronRight, ArrowRight, Award, BarChart2 } from "lucide-react";
import { AssessmentCategory, AssessmentRecommendation, CompanyProfile } from './types';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
  ReferenceLine,
  LabelList
} from 'recharts';
import { ChartContainer, ChartTooltipContent, ChartTooltip } from "@/components/ui/chart";

interface ResultsDisplayProps {
  score: number;
  onReset: () => void;
  maturityLevel?: 'foundational' | 'developing' | 'advanced' | 'optimized';
  companyProfile?: CompanyProfile;
  categoryScores: Record<AssessmentCategory, { score: number, maxPossible: number }>;
  recommendations: AssessmentRecommendation[];
  onContinueToComprehensive: () => void;
  isComprehensiveCompleted?: boolean;
}

const ResultsDisplay = ({ 
  score, 
  onReset, 
  maturityLevel,
  companyProfile,
  categoryScores,
  recommendations,
  onContinueToComprehensive,
  isComprehensiveCompleted = false
}: ResultsDisplayProps) => {
  const [email, setEmail] = React.useState('');
  const [emailSubmitted, setEmailSubmitted] = React.useState(false);
  const [selectedChartType, setSelectedChartType] = React.useState<'radar' | 'bar' | 'line'>('radar');
  
  let description = '';
  let nextSteps = '';
  
  if (maturityLevel === 'foundational') {
    description = 'Your estimating process has significant opportunity for improvement through systematization and data utilization. Focus on documenting processes and centralizing historical information.';
    nextSteps = 'Start by documenting your current processes and creating a central repository for historical project data.';
  } else if (maturityLevel === 'developing') {
    description = 'You have established basics but could benefit from improved analytics and integration. Focus on connecting your existing data and developing more sophisticated analysis.';
    nextSteps = 'Focus on improving data connections between systems and implementing basic statistical analysis.';
  } else if (maturityLevel === 'advanced') {
    description = 'Your estimating capabilities are strong but could be enhanced with predictive analytics and deeper integration. Focus on statistical analysis and strategic intelligence.';
    nextSteps = 'Implement more advanced statistical methods and explore predictive analytics capabilities.';
  } else if (maturityLevel === 'optimized') {
    description = 'Your estimating function is highly mature. Focus on continuous refinement and cutting-edge analytics to maintain your competitive advantage.';
    nextSteps = 'Explore advanced analytics, machine learning applications, and continuous optimization.';
  }

  const radarData = Object.entries(categoryScores).map(([category, { score, maxPossible }]) => {
    const categoryName = category === 'processMethodology' ? 'Process' :
                        category === 'dataTechnology' ? 'Data' :
                        category === 'analysisDecision' ? 'Analysis' :
                        category === 'teamKnowledge' ? 'Knowledge' :
                        category === 'technologyAdoption' ? 'Technology' : '';
                        
    return {
      subject: categoryName,
      A: (score / maxPossible) * 100, // Convert to percentage
      fullMark: 100
    };
  });
  
  const benchmarkData = [
    { category: 'Process', yourScore: (categoryScores.processMethodology.score / categoryScores.processMethodology.maxPossible) * 100, industryAvg: 65 },
    { category: 'Data', yourScore: (categoryScores.dataTechnology.score / categoryScores.dataTechnology.maxPossible) * 100, industryAvg: 58 },
    { category: 'Analysis', yourScore: (categoryScores.analysisDecision.score / categoryScores.analysisDecision.maxPossible) * 100, industryAvg: 62 },
    { category: 'Knowledge', yourScore: (categoryScores.teamKnowledge.score / categoryScores.teamKnowledge.maxPossible) * 100, industryAvg: 70 },
    { category: 'Technology', yourScore: (categoryScores.technologyAdoption.score / categoryScores.technologyAdoption.maxPossible) * 100, industryAvg: 55 }
  ];

  const chartConfig = {
    yourScore: {
      label: "Your Score",
      color: "#2EC4B6"
    },
    industryAvg: {
      label: "Industry Average",
      color: "#0F3460"
    }
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSubmitted(true);
    // In a real implementation, this would send the email to a server
  };
  
  const lowEffortRecommendations = recommendations.filter(rec => rec.effort === 'low');
  const mediumEffortRecommendations = recommendations.filter(rec => rec.effort === 'medium');
  const highEffortRecommendations = recommendations.filter(rec => rec.effort === 'high');
  
  const getImpactClass = (impact: 'low' | 'medium' | 'high') => {
    if (impact === 'high') return 'bg-green-50 border-green-200 text-green-800';
    if (impact === 'medium') return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-gray-50 border-gray-200 text-gray-800';
  };
  
  const getEffortClass = (effort: 'low' | 'medium' | 'high') => {
    if (effort === 'low') return 'bg-green-50 border-green-200 text-green-800';
    if (effort === 'medium') return 'bg-yellow-50 border-yellow-200 text-yellow-800';
    return 'bg-red-50 border-red-200 text-red-800';
  };

  const renderBenchmarkChart = () => {
    switch (selectedChartType) {
      case 'radar':
        return (
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis domain={[0, 100]} />
                <Radar
                  name="Your Score"
                  dataKey="A"
                  stroke="#2EC4B6"
                  fill="#2EC4B6"
                  fillOpacity={0.6}
                />
                <Tooltip content={<CustomTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        );
      case 'bar':
        return (
          <div className="h-[300px]">
            <ChartContainer
              config={chartConfig}
              className="h-full"
            >
              <BarChart
                data={benchmarkData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar dataKey="yourScore" name="Your Score" fill="#2EC4B6" radius={[4, 4, 0, 0]}>
                  <LabelList dataKey="yourScore" position="top" formatter={(value: number) => `${value.toFixed(0)}%`} />
                </Bar>
                <Bar dataKey="industryAvg" name="Industry Average" fill="#0F3460" radius={[4, 4, 0, 0]} fillOpacity={0.7}>
                  <LabelList dataKey="industryAvg" position="top" formatter={(value: number) => `${value.toFixed(0)}%`} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
        );
      case 'line':
        return (
          <div className="h-[300px]">
            <ChartContainer
              config={chartConfig}
              className="h-full"
            >
              <LineChart
                data={benchmarkData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis domain={[0, 100]} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="yourScore" 
                  name="Your Score" 
                  stroke="#2EC4B6" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="industryAvg" 
                  name="Industry Average" 
                  stroke="#0F3460" 
                  strokeDasharray="5 5" 
                  strokeWidth={2}
                />
              </LineChart>
            </ChartContainer>
          </div>
        );
      default:
        return null;
    }
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
          <p className="font-medium">{`${payload[0].payload.subject}: ${payload[0].value.toFixed(0)}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="mb-8 border-pelican-teal/20 shadow-sm bg-white">
      <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-md">
        <CardTitle className="text-[20px] font-heading font-medium">
          {isComprehensiveCompleted ? 'Comprehensive Assessment Results' : 'Assessment Results'}
          {companyProfile?.companyName ? ` for ${companyProfile.companyName}` : ''}
        </CardTitle>
        <CardDescription className="text-white/90">
          Your score: {score} points - {maturityLevel && maturityLevel.charAt(0).toUpperCase() + maturityLevel.slice(1)} Stage
          {isComprehensiveCompleted && ' (Comprehensive Assessment)'}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="mb-6">
          <div className="w-full bg-pelican-lightGray rounded-full h-4 mb-4">
            <div 
              className="h-4 rounded-full bg-gradient-to-r from-pelican-navy to-pelican-teal"
              style={{ width: `${(score / (isComprehensiveCompleted ? 80 : 48)) * 100}%` }}
            ></div>
          </div>
          
          <div className="grid grid-cols-4 text-xs text-center text-pelican-slate">
            <div>Foundational<br/>{isComprehensiveCompleted ? '(20-35)' : '(12-19)'}</div>
            <div>Developing<br/>{isComprehensiveCompleted ? '(36-50)' : '(20-29)'}</div>
            <div>Advanced<br/>{isComprehensiveCompleted ? '(51-65)' : '(30-39)'}</div>
            <div>Optimized<br/>{isComprehensiveCompleted ? '(66-80)' : '(40-48)'}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-pelican-cream/30 rounded-md border border-pelican-cream">
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-2">
              {maturityLevel && maturityLevel.charAt(0).toUpperCase() + maturityLevel.slice(1)} Stage
            </h3>
            <p className="text-pelican-slate">{description}</p>
            <div className="mt-3 text-sm text-pelican-slate font-medium">
              Recommended next steps:
              <p className="font-normal mt-1">{nextSteps}</p>
            </div>
          </div>
          
          <div className="p-4 bg-white rounded-md border border-gray-100">
            <h3 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Category Performance</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={80} data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar
                    name="Your Score"
                    dataKey="A"
                    stroke="#2EC4B6"
                    fill="#2EC4B6"
                    fillOpacity={0.6}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[20px] font-heading font-medium text-pelican-navy">Industry Benchmark Comparison</h3>
            <div className="flex items-center space-x-2 bg-gray-50 p-1 rounded-md border border-gray-100">
              <button 
                onClick={() => setSelectedChartType('radar')} 
                className={`px-3 py-1 rounded text-sm ${selectedChartType === 'radar' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
              >
                Radar
              </button>
              <button 
                onClick={() => setSelectedChartType('bar')} 
                className={`px-3 py-1 rounded text-sm ${selectedChartType === 'bar' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
              >
                Bar
              </button>
              <button 
                onClick={() => setSelectedChartType('line')} 
                className={`px-3 py-1 rounded text-sm ${selectedChartType === 'line' ? 'bg-white shadow-sm border border-gray-200' : 'text-gray-600'}`}
              >
                Line
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-md border border-gray-100">
            {renderBenchmarkChart()}
            <p className="text-sm text-center text-pelican-slate mt-4">
              Comparison against average scores from similar companies in your industry
            </p>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-[20px] font-heading font-medium text-pelican-navy mb-4">Prioritized Recommendations</h3>
          
          {lowEffortRecommendations.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Quick Wins (High Impact, Low Effort)</h4>
              <div className="space-y-3">
                {lowEffortRecommendations.map(rec => (
                  <div key={rec.id} className="p-3 border rounded-md bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                          {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                          {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-pelican-slate">{rec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {mediumEffortRecommendations.length > 0 && (
            <div className="mb-6">
              <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Strategic Initiatives (Medium Effort)</h4>
              <div className="space-y-3">
                {mediumEffortRecommendations.map(rec => (
                  <div key={rec.id} className="p-3 border rounded-md bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                          {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                          {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-pelican-slate">{rec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {highEffortRecommendations.length > 0 && (
            <div>
              <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-2">Transformational Changes (High Effort)</h4>
              <div className="space-y-3">
                {highEffortRecommendations.map(rec => (
                  <div key={rec.id} className="p-3 border rounded-md bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-[14px] font-medium text-pelican-navy">{rec.title}</h5>
                      <div className="flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded-full border ${getImpactClass(rec.impact)}`}>
                          {rec.impact.charAt(0).toUpperCase() + rec.impact.slice(1)} Impact
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getEffortClass(rec.effort)}`}>
                          {rec.effort.charAt(0).toUpperCase() + rec.effort.slice(1)} Effort
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-pelican-slate">{rec.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {!emailSubmitted ? (
          <div className="mb-6">
            <h4 className="text-[18px] font-heading font-medium text-pelican-navy mb-3">Get Your Detailed Assessment Report</h4>
            <form onSubmit={handleSubmitEmail} className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="flex gap-2 mt-1.5">
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-sm"
                    required
                  />
                  <Button type="submit" variant="primary">
                    <MailIcon className="mr-2 h-4 w-4" />
                    Send Report
                  </Button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
            <CheckIcon className="text-green-500 mt-0.5 mr-2 h-5 w-5 flex-shrink-0" />
            <div>
              <h4 className="text-green-800 font-medium">Report Request Received</h4>
              <p className="text-green-700 text-sm">Your detailed assessment report will be sent to {email} shortly.</p>
            </div>
          </div>
        )}
        
        {!isComprehensiveCompleted && (
          <div className="p-4 bg-accent/10 rounded-md border border-accent/20 mb-6">
            <div className="flex items-start">
              <FileText className="h-5 w-5 text-accent mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-[16px] font-heading font-medium text-pelican-navy mb-1">Continue Your Assessment Journey</h4>
                <p className="text-sm text-pelican-slate mb-3">
                  This initial assessment gives you a foundational understanding of your estimating maturity. 
                  For a more comprehensive analysis with tailored recommendations, continue to our detailed assessment.
                </p>
                <Button variant="accent" className="group" onClick={onContinueToComprehensive}>
                  Continue to Comprehensive Assessment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {isComprehensiveCompleted && (
          <div className="p-4 bg-blue-50 rounded-md border border-blue-200 mb-6">
            <div className="flex items-start">
              <Award className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h4 className="text-[16px] font-heading font-medium text-blue-800 mb-1">Your Next Steps</h4>
                <p className="text-sm text-blue-700 mb-3">
                  Congratulations on completing the comprehensive assessment! Based on your results, we've prepared a custom implementation roadmap for your organization.
                </p>
                <Button variant="primary" className="group">
                  Schedule Implementation Consultation
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="secondary-outline" onClick={onReset} className="border-secondary text-secondary hover:bg-secondary/5">
            Retake Assessment
          </Button>
          <Button variant="primary">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Schedule Consultation
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsDisplay;
