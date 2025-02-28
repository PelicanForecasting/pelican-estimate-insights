
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ProjectData = {
  id: number;
  projectType: string;
  bidAmount: number;
  won: boolean;
};

const BidHitRatioCalculator = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [projectType, setProjectType] = useState<string>('commercial');
  const [bidAmount, setBidAmount] = useState<string>('');
  const [won, setWon] = useState<boolean>(false);
  
  // Summary statistics
  const [overallStats, setOverallStats] = useState({
    totalBids: 0,
    totalWins: 0,
    winRate: 0,
    averageBidAmount: 0,
    averageWinAmount: 0,
  });
  
  // Project type statistics
  const [typeStats, setTypeStats] = useState<{[key: string]: {
    bids: number,
    wins: number,
    winRate: number,
    averageBidAmount: number,
    averageWinAmount: number
  }}>({}); 

  const projectTypes = [
    { value: 'commercial', label: 'Commercial' },
    { value: 'residential', label: 'Residential' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'highway', label: 'Highway/Bridge' },
    { value: 'utility', label: 'Utility' },
    { value: 'other', label: 'Other' }
  ];

  const addProject = () => {
    if (!bidAmount || isNaN(parseFloat(bidAmount))) {
      toast({
        title: "Error",
        description: "Please enter a valid bid amount",
        variant: "destructive"
      });
      return;
    }

    const newProject: ProjectData = {
      id: Date.now(),
      projectType,
      bidAmount: parseFloat(bidAmount),
      won
    };

    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    calculateStats(updatedProjects);
    
    // Reset form
    setBidAmount('');
    setWon(false);
    
    toast({
      title: "Project Added",
      description: `Added ${projectType} project with bid amount $${parseFloat(bidAmount).toLocaleString()}`,
    });
  };
  
  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(project => project.id !== id);
    setProjects(updatedProjects);
    calculateStats(updatedProjects);
    
    toast({
      title: "Project Removed",
      description: "Project has been removed from the analysis",
    });
  };

  const calculateStats = (projectList: ProjectData[]) => {
    // Calculate overall statistics
    const totalBids = projectList.length;
    const wonProjects = projectList.filter(p => p.won);
    const totalWins = wonProjects.length;
    const winRate = totalBids > 0 ? (totalWins / totalBids) * 100 : 0;
    
    const totalBidAmount = projectList.reduce((sum, p) => sum + p.bidAmount, 0);
    const totalWinAmount = wonProjects.reduce((sum, p) => sum + p.bidAmount, 0);
    
    const averageBidAmount = totalBids > 0 ? totalBidAmount / totalBids : 0;
    const averageWinAmount = totalWins > 0 ? totalWinAmount / totalWins : 0;
    
    setOverallStats({
      totalBids,
      totalWins,
      winRate,
      averageBidAmount,
      averageWinAmount
    });
    
    // Calculate statistics by project type
    const types: {[key: string]: {
      bids: number,
      wins: number,
      winRate: number,
      totalBidAmount: number,
      totalWinAmount: number,
      averageBidAmount: number,
      averageWinAmount: number
    }} = {};
    
    projectList.forEach(project => {
      if (!types[project.projectType]) {
        types[project.projectType] = {
          bids: 0,
          wins: 0,
          winRate: 0,
          totalBidAmount: 0,
          totalWinAmount: 0,
          averageBidAmount: 0,
          averageWinAmount: 0
        };
      }
      
      types[project.projectType].bids += 1;
      types[project.projectType].totalBidAmount += project.bidAmount;
      
      if (project.won) {
        types[project.projectType].wins += 1;
        types[project.projectType].totalWinAmount += project.bidAmount;
      }
    });
    
    // Calculate derived statistics for each type
    Object.keys(types).forEach(type => {
      const typeStat = types[type];
      typeStat.winRate = (typeStat.wins / typeStat.bids) * 100;
      typeStat.averageBidAmount = typeStat.totalBidAmount / typeStat.bids;
      typeStat.averageWinAmount = typeStat.wins > 0 ? typeStat.totalWinAmount / typeStat.wins : 0;
    });
    
    setTypeStats(types);
  };
  
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };
  
  const formatPercent = (percent: number) => {
    return `${percent.toFixed(1)}%`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Bid-Hit Ratio Calculator</h1>
        <p className="mb-6">Analyze your bidding performance to identify patterns and optimize your bidding strategy. Track which project types have the highest success rates.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Add Project Data</CardTitle>
              <CardDescription>Enter your historical bidding information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select 
                    value={projectType} 
                    onValueChange={setProjectType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bidAmount">Bid Amount ($)</Label>
                  <Input 
                    id="bidAmount" 
                    type="number" 
                    min="0" 
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter bid amount"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="wonBid"
                    checked={won}
                    onChange={(e) => setWon(e.target.checked)}
                    className="rounded"
                  />
                  <Label htmlFor="wonBid">Won this bid?</Label>
                </div>
                
                <Button 
                  onClick={addProject} 
                  className="w-full"
                >
                  Add Project
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Bid-Hit Analysis</CardTitle>
              <CardDescription>Summary of your bidding performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Bids</h3>
                  <p className="text-2xl font-bold">{overallStats.totalBids}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Wins</h3>
                  <p className="text-2xl font-bold">{overallStats.totalWins}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Overall Win Rate</h3>
                  <p className="text-2xl font-bold">{formatPercent(overallStats.winRate)}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Avg. Winning Bid</h3>
                  <p className="text-2xl font-bold">{formatCurrency(overallStats.averageWinAmount)}</p>
                </div>
              </div>
              
              <h3 className="font-medium text-lg mb-4">Performance by Project Type</h3>
              
              {Object.keys(typeStats).length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Project Type</th>
                        <th className="text-center py-2">Bids</th>
                        <th className="text-center py-2">Wins</th>
                        <th className="text-center py-2">Win Rate</th>
                        <th className="text-right py-2">Avg. Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(typeStats).map(type => (
                        <tr key={type} className="border-b">
                          <td className="py-2 capitalize">{type}</td>
                          <td className="text-center py-2">{typeStats[type].bids}</td>
                          <td className="text-center py-2">{typeStats[type].wins}</td>
                          <td className="text-center py-2">{formatPercent(typeStats[type].winRate)}</td>
                          <td className="text-right py-2">{formatCurrency(typeStats[type].averageBidAmount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 italic">Add project data to see performance by type</p>
              )}
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Project Data</CardTitle>
            <CardDescription>Your entered bid information</CardDescription>
          </CardHeader>
          <CardContent>
            {projects.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Project Type</th>
                      <th className="text-right py-2">Bid Amount</th>
                      <th className="text-center py-2">Result</th>
                      <th className="text-right py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map(project => (
                      <tr key={project.id} className="border-b">
                        <td className="py-2 capitalize">{project.projectType}</td>
                        <td className="text-right py-2">{formatCurrency(project.bidAmount)}</td>
                        <td className="text-center py-2">
                          <span className={`px-2 py-1 rounded text-xs ${project.won ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {project.won ? 'Won' : 'Lost'}
                          </span>
                        </td>
                        <td className="text-right py-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => deleteProject(project.id)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 italic">No project data entered yet</p>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">For more advanced analysis and recommendations, contact Pelican Forecasting Group.</p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default BidHitRatioCalculator;
