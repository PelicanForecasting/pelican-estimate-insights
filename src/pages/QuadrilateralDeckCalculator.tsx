
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface Coordinates {
  x: number;
  y: number;
}

interface DeckResults {
  area: number;
  perimeter: number;
  deckingBoards: number;
  joist: number;
  fascia: number;
  screws: number;
}

interface MaterialCost {
  deckingCostPerSqFt: number;
  joistCostPerFt: number;
  fasciaCostPerFt: number;
  screwsCostPer100: number;
}

const DEFAULT_COORDINATES: Coordinates[] = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 16 },
  { x: 0, y: 16 }
];

const DEFAULT_MATERIALS: MaterialCost = {
  deckingCostPerSqFt: 8.50,
  joistCostPerFt: 2.75,
  fasciaCostPerFt: 3.25,
  screwsCostPer100: 12.99
};

const QuadrilateralDeckCalculator = () => {
  const { toast } = useToast();
  const [coordinates, setCoordinates] = useState<Coordinates[]>(DEFAULT_COORDINATES);
  const [materials, setMaterials] = useState<MaterialCost>(DEFAULT_MATERIALS);
  const [results, setResults] = useState<DeckResults | null>(null);
  const [activeTab, setActiveTab] = useState<string>("coordinates");
  
  // Calculate canvas scale and offsets for displaying the shape
  const [canvasParams, setCanvasParams] = useState({
    scale: 15,
    offsetX: 50,
    offsetY: 50,
    canvasWidth: 400,
    canvasHeight: 300
  });

  // Effect to recalculate canvas parameters when coordinates change
  useEffect(() => {
    if (coordinates.length === 4) {
      const xValues = coordinates.map(coord => coord.x);
      const yValues = coordinates.map(coord => coord.y);
      
      const minX = Math.min(...xValues);
      const maxX = Math.max(...xValues);
      const minY = Math.min(...yValues);
      const maxY = Math.max(...yValues);
      
      const width = maxX - minX;
      const height = maxY - minY;
      
      // Determine appropriate scale
      const scaleX = width > 0 ? (canvasParams.canvasWidth - 100) / width : 15;
      const scaleY = height > 0 ? (canvasParams.canvasHeight - 100) / height : 15;
      const scale = Math.min(scaleX, scaleY);
      
      setCanvasParams({
        ...canvasParams,
        scale: scale,
        offsetX: 50 - minX * scale,
        offsetY: 50 - minY * scale
      });
    }
  }, [coordinates]);

  // Update a specific coordinate
  const handleCoordinateChange = (index: number, axis: 'x' | 'y', value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    const newCoordinates = [...coordinates];
    newCoordinates[index][axis] = numValue;
    setCoordinates(newCoordinates);
  };

  // Update material costs
  const handleMaterialChange = (key: keyof MaterialCost, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    
    setMaterials({
      ...materials,
      [key]: numValue
    });
  };

  // Calculate the area of a quadrilateral using the Shoelace formula
  const calculateArea = (coords: Coordinates[]): number => {
    if (coords.length !== 4) return 0;
    
    let area = 0;
    for (let i = 0; i < coords.length; i++) {
      const j = (i + 1) % coords.length;
      area += coords[i].x * coords[j].y;
      area -= coords[j].x * coords[i].y;
    }
    
    return Math.abs(area) / 2;
  };

  // Calculate the perimeter of the quadrilateral
  const calculatePerimeter = (coords: Coordinates[]): number => {
    if (coords.length !== 4) return 0;
    
    let perimeter = 0;
    for (let i = 0; i < coords.length; i++) {
      const j = (i + 1) % coords.length;
      const dx = coords[j].x - coords[i].x;
      const dy = coords[j].y - coords[i].y;
      perimeter += Math.sqrt(dx * dx + dy * dy);
    }
    
    return perimeter;
  };

  // Calculate all deck metrics
  const calculateDeckMetrics = () => {
    try {
      const area = calculateArea(coordinates);
      const perimeter = calculatePerimeter(coordinates);
      
      // Validate the shape
      if (area <= 0) {
        toast({
          title: "Invalid Shape",
          description: "Please check your coordinates. The shape may be invalid or the points entered in the wrong order.",
          variant: "destructive"
        });
        return;
      }
      
      // Calculate materials
      // Assumptions:
      // - Decking boards: 5.5" wide (standard 6" nominal width)
      // - Joists: 16" on center
      // - 4 screws per sq ft for decking
      
      const deckingBoardsNeeded = Math.ceil(area / (5.5/12)); // 5.5" wide boards
      const joistNeeded = Math.ceil((area / (16/12)) * 1.15); // 15% extra for waste
      const fasciaNeeded = Math.ceil(perimeter * 1.1); // 10% extra for waste
      const screwsNeeded = Math.ceil(area * 4); // 4 screws per sq ft
      
      setResults({
        area: parseFloat(area.toFixed(2)),
        perimeter: parseFloat(perimeter.toFixed(2)),
        deckingBoards: deckingBoardsNeeded,
        joist: joistNeeded,
        fascia: fasciaNeeded,
        screws: screwsNeeded
      });
      
      // Move to results tab
      setActiveTab("results");
      
      toast({
        title: "Calculations Complete",
        description: "Your deck measurements have been calculated successfully.",
      });
    } catch (error) {
      toast({
        title: "Calculation Error",
        description: "There was an error calculating your deck measurements. Please check your inputs.",
        variant: "destructive"
      });
    }
  };

  // Reset to default values
  const handleReset = () => {
    setCoordinates(DEFAULT_COORDINATES);
    setMaterials(DEFAULT_MATERIALS);
    setResults(null);
    setActiveTab("coordinates");
    
    toast({
      title: "Calculator Reset",
      description: "All values have been reset to defaults.",
    });
  };

  // Render the quadrilateral on canvas
  const renderQuadrilateral = () => {
    const canvas = document.getElementById('deckCanvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the quadrilateral
    ctx.beginPath();
    coordinates.forEach((coord, index) => {
      const canvasX = coord.x * canvasParams.scale + canvasParams.offsetX;
      const canvasY = coord.y * canvasParams.scale + canvasParams.offsetY;
      
      if (index === 0) {
        ctx.moveTo(canvasX, canvasY);
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
      
      // Draw and label points
      ctx.fillStyle = '#2D4654'; // pelican-navy
      ctx.beginPath();
      ctx.arc(canvasX, canvasY, 5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#2D4654';
      ctx.font = '12px sans-serif';
      ctx.fillText(`P${index+1} (${coord.x}, ${coord.y})`, canvasX + 10, canvasY - 10);
    });
    
    // Close the path back to the first point
    const firstX = coordinates[0].x * canvasParams.scale + canvasParams.offsetX;
    const firstY = coordinates[0].y * canvasParams.scale + canvasParams.offsetY;
    ctx.lineTo(firstX, firstY);
    
    // Style and stroke the shape
    ctx.strokeStyle = '#26809D'; // pelican-teal
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Fill with semi-transparent color
    ctx.fillStyle = 'rgba(38, 128, 157, 0.2)'; // pelican-teal with transparency
    ctx.fill();
  };

  // Call render function when coordinates change
  useEffect(() => {
    renderQuadrilateral();
  }, [coordinates, canvasParams]);

  // Calculate total material costs
  const calculateMaterialCosts = () => {
    if (!results) return 0;
    
    const deckingCost = results.area * materials.deckingCostPerSqFt;
    const joistCost = results.joist * materials.joistCostPerFt;
    const fasciaCost = results.fascia * materials.fasciaCostPerFt;
    const screwsCost = (results.screws / 100) * materials.screwsCostPer100;
    
    return deckingCost + joistCost + fasciaCost + screwsCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
      <div className="fixed inset-0 bg-[url('/lovable-uploads/985727ce-a419-46ea-9978-f8dda539591e.png')] bg-center bg-no-repeat opacity-[0.02] pointer-events-none z-0"></div>
      <Navbar />
      
      <main className="container max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-pelican-navy mb-4">
            Quadrilateral Deck Calculator
          </h1>
          <p className="text-pelican-slate text-center mb-8 max-w-3xl mx-auto text-lg">
            Calculate area and materials for non-rectangular decks with precision
          </p>
        </div>
        
        <Card className="shadow-xl border-pelican-teal/20 bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pelican-navy to-pelican-teal text-white rounded-t-lg p-6">
            <CardTitle className="text-2xl font-heading">Quadrilateral Deck Calculator</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Calculate materials and cost for four-sided deck shapes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="coordinates">1. Coordinates</TabsTrigger>
                <TabsTrigger value="materials">2. Materials</TabsTrigger>
                <TabsTrigger value="results" disabled={!results}>3. Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="coordinates" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="text-xl font-medium text-pelican-navy">Enter Deck Coordinates</div>
                    <p className="text-pelican-slate">
                      Enter the four corner points of your deck in a clockwise or counter-clockwise order.
                      All measurements should be in feet.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {coordinates.map((coord, index) => (
                        <div key={index} className="space-y-2">
                          <Label>Point {index + 1}</Label>
                          <div className="flex gap-2">
                            <div className="space-y-1 flex-1">
                              <Label htmlFor={`x-${index}`} className="text-xs">X</Label>
                              <Input
                                id={`x-${index}`}
                                type="number"
                                value={coord.x}
                                onChange={(e) => handleCoordinateChange(index, 'x', e.target.value)}
                                step="0.1"
                              />
                            </div>
                            <div className="space-y-1 flex-1">
                              <Label htmlFor={`y-${index}`} className="text-xs">Y</Label>
                              <Input
                                id={`y-${index}`}
                                type="number"
                                value={coord.y}
                                onChange={(e) => handleCoordinateChange(index, 'y', e.target.value)}
                                step="0.1"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handleReset}>
                        Reset
                      </Button>
                      <Button variant="secondary" onClick={() => setActiveTab("materials")}>
                        Next: Materials
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 bg-pelican-lightGray/20 rounded-lg p-4">
                    <div className="text-xl font-medium text-pelican-navy mb-4">Deck Preview</div>
                    <div className="bg-white border border-pelican-lightGray rounded-lg overflow-hidden">
                      <canvas 
                        id="deckCanvas" 
                        width={canvasParams.canvasWidth} 
                        height={canvasParams.canvasHeight}
                        className="mx-auto"
                      ></canvas>
                    </div>
                    <p className="text-sm text-pelican-slate mt-4">
                      This preview shows the shape of your deck based on the coordinates entered.
                      Points are labeled P1-P4 with their coordinates.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="materials" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 space-y-6">
                    <div className="text-xl font-medium text-pelican-navy">Enter Material Costs</div>
                    <p className="text-pelican-slate">
                      Enter the cost of each material to calculate the total project cost.
                      All costs should be in USD.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="deckingCost">Decking Cost (per sq ft)</Label>
                        <Input
                          id="deckingCost"
                          type="number"
                          value={materials.deckingCostPerSqFt}
                          onChange={(e) => handleMaterialChange('deckingCostPerSqFt', e.target.value)}
                          step="0.01"
                          min="0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="joistCost">Joist Cost (per linear ft)</Label>
                        <Input
                          id="joistCost"
                          type="number"
                          value={materials.joistCostPerFt}
                          onChange={(e) => handleMaterialChange('joistCostPerFt', e.target.value)}
                          step="0.01"
                          min="0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="fasciaCost">Fascia Cost (per linear ft)</Label>
                        <Input
                          id="fasciaCost"
                          type="number"
                          value={materials.fasciaCostPerFt}
                          onChange={(e) => handleMaterialChange('fasciaCostPerFt', e.target.value)}
                          step="0.01"
                          min="0"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="screwsCost">Screws Cost (per 100)</Label>
                        <Input
                          id="screwsCost"
                          type="number"
                          value={materials.screwsCostPer100}
                          onChange={(e) => handleMaterialChange('screwsCostPer100', e.target.value)}
                          step="0.01"
                          min="0"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={() => setActiveTab("coordinates")}>
                        Back: Coordinates
                      </Button>
                      <Button variant="accent" onClick={calculateDeckMetrics}>
                        Calculate Results
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 bg-pelican-lightGray/20 rounded-lg p-4">
                    <div className="text-xl font-medium text-pelican-navy mb-4">Calculation Guide</div>
                    <div className="space-y-4 text-pelican-slate">
                      <p>
                        <strong>Decking Boards:</strong> Calculated based on standard 5.5" wide deck boards and the total square footage.
                      </p>
                      <p>
                        <strong>Joists:</strong> Calculated based on 16" on center spacing with a 15% waste factor.
                      </p>
                      <p>
                        <strong>Fascia:</strong> Calculated based on the perimeter of the deck with a 10% waste factor.
                      </p>
                      <p>
                        <strong>Screws:</strong> Calculated at approximately 4 screws per square foot.
                      </p>
                      <p className="italic text-sm mt-4">
                        Note: These calculations provide estimates only and may vary based on specific design requirements.
                        Always consult with a professional before purchasing materials.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="space-y-6">
                {results && (
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 space-y-6">
                      <div className="text-xl font-medium text-pelican-navy">Deck Measurements</div>
                      
                      <div className="bg-pelican-lightGray/10 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Area:</span>
                          <span className="font-medium">{results.area} sq ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Perimeter:</span>
                          <span className="font-medium">{results.perimeter} ft</span>
                        </div>
                      </div>
                      
                      <div className="text-xl font-medium text-pelican-navy mt-4">Material Estimates</div>
                      
                      <div className="bg-pelican-lightGray/10 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Decking Boards:</span>
                          <span className="font-medium">{results.deckingBoards} pcs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Joists:</span>
                          <span className="font-medium">{results.joist} linear ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Fascia:</span>
                          <span className="font-medium">{results.fascia} linear ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-pelican-slate">Screws:</span>
                          <span className="font-medium">{results.screws} pcs</span>
                        </div>
                      </div>
                      
                      <div className="bg-pelican-navy/5 p-6 rounded-lg">
                        <div className="text-xl font-medium text-pelican-navy mb-2">Estimated Total Cost</div>
                        <div className="text-3xl font-bold text-pelican-navy">
                          ${calculateMaterialCosts().toFixed(2)}
                        </div>
                        <div className="text-sm text-pelican-slate mt-2">
                          Based on the material costs entered
                        </div>
                      </div>
                      
                      <div className="flex justify-between mt-6">
                        <Button variant="outline" onClick={() => setActiveTab("materials")}>
                          Back: Materials
                        </Button>
                        <Button variant="accent" onClick={handleReset}>
                          Start New Calculation
                        </Button>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 bg-pelican-lightGray/20 rounded-lg p-4">
                      <div className="text-xl font-medium text-pelican-navy mb-4">Deck Visualization</div>
                      <div className="bg-white border border-pelican-lightGray rounded-lg overflow-hidden">
                        <canvas 
                          id="resultCanvas" 
                          width={canvasParams.canvasWidth} 
                          height={canvasParams.canvasHeight}
                          className="mx-auto"
                        ></canvas>
                      </div>
                      <div className="mt-6 space-y-4">
                        <div className="text-lg font-medium text-pelican-navy">Material Breakdown</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Decking ({materials.deckingCostPerSqFt.toFixed(2)}/sq ft):</span>
                            <span>${(results.area * materials.deckingCostPerSqFt).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Joists (${materials.joistCostPerFt.toFixed(2)}/ft):</span>
                            <span>${(results.joist * materials.joistCostPerFt).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Fascia (${materials.fasciaCostPerFt.toFixed(2)}/ft):</span>
                            <span>${(results.fascia * materials.fasciaCostPerFt).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Screws (${materials.screwsCostPer100.toFixed(2)}/100):</span>
                            <span>${((results.screws / 100) * materials.screwsCostPer100).toFixed(2)}</span>
                          </div>
                          <Separator className="my-2" />
                          <div className="flex justify-between font-medium">
                            <span>Total Cost:</span>
                            <span>${calculateMaterialCosts().toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-pelican-slate mt-6">
                        This calculator provides estimates for planning purposes. Actual material needs may vary based on specific design requirements and waste factors.
                      </p>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Accurate Measurements</h3>
            <p className="text-pelican-slate">Calculate precise areas for irregular quadrilateral shapes</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Material Estimates</h3>
            <p className="text-pelican-slate">Get detailed breakdowns of decking, framing, and fasteners needed</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Time Savings</h3>
            <p className="text-pelican-slate">Save hours on complex calculations and reduce material waste</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuadrilateralDeckCalculator;
