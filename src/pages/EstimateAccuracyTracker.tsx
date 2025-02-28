
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type EstimateData = {
  id: number;
  costCode: string;
  description: string;
  estimated: number;
  actual: number;
  variance: number;
  percentVariance: number;
};

const EstimateAccuracyTracker = () => {
  const { toast } = useToast();
  const [estimates, setEstimates] = useState<EstimateData[]>([]);
  const [costCode, setCostCode] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [estimated, setEstimated] = useState<string>('');
  const [actual, setActual] = useState<string>('');
  
  // Summary statistics
  const [summaryStats, setSummaryStats] = useState({
    totalItems: 0,
    totalEstimated: 0,
    totalActual: 0,
    totalVariance: 0,
    percentVariance: 0,
    overEstimated: 0,
    underEstimated: 0,
    accurateEstimated: 0,
  });

  const costCodeOptions = [
    { value: '01000', label: '01000 - General Requirements' },
    { value: '02000', label: '02000 - Site Construction' },
    { value: '03000', label: '03000 - Concrete' },
    { value: '04000', label: '04000 - Masonry' },
    { value: '05000', label: '05000 - Metals' },
    { value: '06000', label: '06000 - Wood & Plastics' },
    { value: '07000', label: '07000 - Thermal & Moisture' },
    { value: '08000', label: '08000 - Doors & Windows' },
    { value: '09000', label: '09000 - Finishes' },
    { value: '10000', label: '10000 - Specialties' },
    { value: '11000', label: '11000 - Equipment' },
    { value: '12000', label: '12000 - Furnishings' },
    { value: '13000', label: '13000 - Special Construction' },
    { value: '14000', label: '14000 - Conveying Systems' },
    { value: '15000', label: '15000 - Mechanical' },
    { value: '16000', label: '16000 - Electrical' },
    { value: 'OTHER', label: 'Other / Custom' },
  ];

  const addEstimate = () => {
    if (!costCode || !description || !estimated || !actual) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const estimatedValue = parseFloat(estimated);
    const actualValue = parseFloat(actual);
    
    if (isNaN(estimatedValue) || isNaN(actualValue)) {
      toast({
        title: "Error",
        description: "Please enter valid numbers for estimated and actual amounts",
        variant: "destructive"
      });
      return;
    }

    const variance = actualValue - estimatedValue;
    const percentVariance = estimatedValue !== 0 ? (variance / estimatedValue) * 100 : 0;

    const newEstimate: EstimateData = {
      id: Date.now(),
      costCode,
      description,
      estimated: estimatedValue,
      actual: actualValue,
      variance,
      percentVariance
    };

    const updatedEstimates = [...estimates, newEstimate];
    setEstimates(updatedEstimates);
    calculateStats(updatedEstimates);
    
    // Reset form
    setCostCode('');
    setDescription('');
    setEstimated('');
    setActual('');
    
    toast({
      title: "Item Added",
      description: `Added ${description} with variance of ${variance >= 0 ? '+' : ''}${variance.toLocaleString()} (${percentVariance.toFixed(1)}%)`,
    });
  };
  
  const deleteEstimate = (id: number) => {
    const updatedEstimates = estimates.filter(estimate => estimate.id !== id);
    setEstimates(updatedEstimates);
    calculateStats(updatedEstimates);
    
    toast({
      title: "Item Removed",
      description: "Item has been removed from the analysis",
    });
  };

  const calculateStats = (estimateList: EstimateData[]) => {
    const totalItems = estimateList.length;
    const totalEstimated = estimateList.reduce((sum, e) => sum + e.estimated, 0);
    const totalActual = estimateList.reduce((sum, e) => sum + e.actual, 0);
    const totalVariance = totalActual - totalEstimated;
    const percentVariance = totalEstimated !== 0 ? (totalVariance / totalEstimated) * 100 : 0;
    
    const overEstimated = estimateList.filter(e => e.variance < 0).length;
    const underEstimated = estimateList.filter(e => e.variance > 0).length;
    const accurateEstimated = estimateList.filter(e => Math.abs(e.percentVariance) <= 5).length;
    
    setSummaryStats({
      totalItems,
      totalEstimated,
      totalActual,
      totalVariance,
      percentVariance,
      overEstimated,
      underEstimated,
      accurateEstimated,
    });
  };
  
  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };
  
  const getVarianceColor = (percentVariance: number) => {
    if (Math.abs(percentVariance) <= 5) return 'text-green-600';
    if (percentVariance < 0) return 'text-blue-600'; // Under budget (negative variance)
    return 'text-red-600'; // Over budget (positive variance)
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Estimate Accuracy Tracker</h1>
        <p className="mb-6">Track the accuracy of your construction estimates against actual costs to identify patterns and improve future estimating.</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Add Cost Item</CardTitle>
              <CardDescription>Enter estimated vs. actual costs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="costCode">Cost Code</Label>
                  <Select 
                    value={costCode} 
                    onValueChange={setCostCode}
                  >
                    <SelectTrigger id="costCode">
                      <SelectValue placeholder="Select cost code" />
                    </SelectTrigger>
                    <SelectContent>
                      {costCodeOptions.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input 
                    id="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Item description"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="estimated">Estimated Cost ($)</Label>
                  <Input 
                    id="estimated" 
                    type="number" 
                    min="0" 
                    value={estimated}
                    onChange={(e) => setEstimated(e.target.value)}
                    placeholder="Estimated amount"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="actual">Actual Cost ($)</Label>
                  <Input 
                    id="actual" 
                    type="number" 
                    min="0" 
                    value={actual}
                    onChange={(e) => setActual(e.target.value)}
                    placeholder="Actual amount"
                  />
                </div>
                
                <Button 
                  onClick={addEstimate} 
                  className="w-full"
                >
                  Add Item
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Estimate Accuracy Summary</CardTitle>
              <CardDescription>Overall performance of your estimates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Total Items</h3>
                  <p className="text-2xl font-bold">{summaryStats.totalItems}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Overall Variance</h3>
                  <p className={`text-2xl font-bold ${getVarianceColor(summaryStats.percentVariance)}`}>
                    {summaryStats.percentVariance.toFixed(1)}%
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Underestimated</h3>
                  <p className="text-2xl font-bold text-red-600">{summaryStats.underEstimated}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Overestimated</h3>
                  <p className="text-2xl font-bold text-blue-600">{summaryStats.overEstimated}</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-lg mb-3">Cost Summary</h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 font-medium">Total Estimated:</td>
                        <td className="py-2 text-right">{formatCurrency(summaryStats.totalEstimated)}</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Total Actual:</td>
                        <td className="py-2 text-right">{formatCurrency(summaryStats.totalActual)}</td>
                      </tr>
                      <tr className="border-t">
                        <td className="py-2 font-medium">Variance:</td>
                        <td className={`py-2 text-right font-bold ${getVarianceColor(summaryStats.percentVariance)}`}>
                          {formatCurrency(summaryStats.totalVariance)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-3">Accuracy Stats</h3>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 font-medium">Within 5%:</td>
                        <td className="py-2 text-right">
                          {summaryStats.accurateEstimated} 
                          <span className="text-gray-500 ml-1">
                            ({summaryStats.totalItems > 0 ? ((summaryStats.accurateEstimated / summaryStats.totalItems) * 100).toFixed(0) : 0}%)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Above 5%:</td>
                        <td className="py-2 text-right text-red-600">
                          {summaryStats.underEstimated - Math.min(summaryStats.underEstimated, summaryStats.accurateEstimated / 2)}
                          <span className="text-gray-500 ml-1">
                            ({summaryStats.totalItems > 0 ? (((summaryStats.underEstimated - Math.min(summaryStats.underEstimated, summaryStats.accurateEstimated / 2)) / summaryStats.totalItems) * 100).toFixed(0) : 0}%)
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Below -5%:</td>
                        <td className="py-2 text-right text-blue-600">
                          {summaryStats.overEstimated - Math.min(summaryStats.overEstimated, summaryStats.accurateEstimated / 2)}
                          <span className="text-gray-500 ml-1">
                            ({summaryStats.totalItems > 0 ? (((summaryStats.overEstimated - Math.min(summaryStats.overEstimated, summaryStats.accurateEstimated / 2)) / summaryStats.totalItems) * 100).toFixed(0) : 0}%)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Estimate Detail</CardTitle>
            <CardDescription>Line item comparison of estimates vs. actuals</CardDescription>
          </CardHeader>
          <CardContent>
            {estimates.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Cost Code</th>
                      <th className="text-left py-2">Description</th>
                      <th className="text-right py-2">Estimated</th>
                      <th className="text-right py-2">Actual</th>
                      <th className="text-right py-2">Variance</th>
                      <th className="text-right py-2">%</th>
                      <th className="text-right py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estimates.map(estimate => (
                      <tr key={estimate.id} className="border-b">
                        <td className="py-2">{estimate.costCode}</td>
                        <td className="py-2">{estimate.description}</td>
                        <td className="text-right py-2">{formatCurrency(estimate.estimated)}</td>
                        <td className="text-right py-2">{formatCurrency(estimate.actual)}</td>
                        <td className="text-right py-2">
                          <span className={getVarianceColor(estimate.percentVariance)}>
                            {formatCurrency(estimate.variance)}
                          </span>
                        </td>
                        <td className="text-right py-2">
                          <span className={getVarianceColor(estimate.percentVariance)}>
                            {estimate.percentVariance.toFixed(1)}%
                          </span>
                        </td>
                        <td className="text-right py-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => deleteEstimate(estimate.id)}
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
              <p className="text-gray-500 italic">No estimate data entered yet</p>
            )}
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">
              Note: Green indicates within ±5% (good accuracy), blue indicates overestimated (under budget), 
              and red indicates underestimated (over budget).
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default EstimateAccuracyTracker;
