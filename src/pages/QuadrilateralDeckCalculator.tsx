import React, { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/sections/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Import types
import { Coordinates, DeckResults, MaterialCost, CanvasParams, DEFAULT_COORDINATES, DEFAULT_MATERIALS, DEFAULT_CANVAS_PARAMS, CalculationMethod, SideLengthsDiagonalsData, SideLengthsAngleData, DEFAULT_SIDE_LENGTHS_DIAGONALS, DEFAULT_SIDE_LENGTHS_ANGLE } from '@/features/quadrilateral-deck-calculator/types';

// Import calculation utilities
import { calculateAreaFromCoordinates, calculatePerimeterFromCoordinates, calculateAreaFromSideLengthsDiagonals, calculatePerimeterFromSideLengths, calculateAreaFromSideLengthsAngle, generateCoordinatesFromSideLengthsAngle, generateCoordinatesFromSideLengthsDiagonals, calculateDeckMetrics, validateShape } from '@/features/quadrilateral-deck-calculator/utils/calculations';

// Import components
import CoordinatesInput from '@/features/quadrilateral-deck-calculator/components/CoordinatesInput';
import SideLengthsDiagonalsInput from '@/features/quadrilateral-deck-calculator/components/SideLengthsDiagonalsInput';
import SideLengthsAngleInput from '@/features/quadrilateral-deck-calculator/components/SideLengthsAngleInput';
import MaterialCostInput from '@/features/quadrilateral-deck-calculator/components/MaterialCostInput';
import CalculationGuide from '@/features/quadrilateral-deck-calculator/components/CalculationGuide';
import ResultsDisplay from '@/features/quadrilateral-deck-calculator/components/ResultsDisplay';
import ShapeVisualizer from '@/features/quadrilateral-deck-calculator/components/ShapeVisualizer';
import MethodSelector from '@/features/quadrilateral-deck-calculator/components/MethodSelector';
const QuadrilateralDeckCalculator: React.FC = () => {
  const {
    toast
  } = useToast();

  // State for the calculation method
  const [calculationMethod, setCalculationMethod] = useState<CalculationMethod>("coordinates");

  // State for coordinates method
  const [coordinates, setCoordinates] = useState<Coordinates[]>(DEFAULT_COORDINATES);

  // State for side lengths + diagonals method
  const [sideLengthsDiagonals, setSideLengthsDiagonals] = useState<SideLengthsDiagonalsData>(DEFAULT_SIDE_LENGTHS_DIAGONALS);

  // State for side lengths + angle method
  const [sideLengthsAngle, setSideLengthsAngle] = useState<SideLengthsAngleData>(DEFAULT_SIDE_LENGTHS_ANGLE);

  // Common states
  const [materials, setMaterials] = useState<MaterialCost>(DEFAULT_MATERIALS);
  const [results, setResults] = useState<DeckResults | null>(null);
  const [activeTab, setActiveTab] = useState<string>("input");

  // Canvas parameters
  const [canvasParams, setCanvasParams] = useState<CanvasParams>(DEFAULT_CANVAS_PARAMS);

  // For visualization - we need to generate coordinates for all methods
  const [visualCoordinates, setVisualCoordinates] = useState<Coordinates[]>(coordinates);

  // Effect to update visualization coordinates when input method changes
  useEffect(() => {
    if (calculationMethod === "coordinates") {
      setVisualCoordinates(coordinates);
    } else if (calculationMethod === "sideLengthsDiagonals") {
      setVisualCoordinates(generateCoordinatesFromSideLengthsDiagonals(sideLengthsDiagonals));
    } else if (calculationMethod === "sideLengthsAngle") {
      setVisualCoordinates(generateCoordinatesFromSideLengthsAngle(sideLengthsAngle));
    }
  }, [calculationMethod, coordinates, sideLengthsDiagonals, sideLengthsAngle]);

  // Effect to recalculate canvas parameters when coordinates change
  useEffect(() => {
    if (visualCoordinates.length === 4) {
      const xValues = visualCoordinates.map(coord => coord.x);
      const yValues = visualCoordinates.map(coord => coord.y);
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
  }, [visualCoordinates]);

  // Update a specific coordinate for coordinates method
  const handleCoordinateChange = (index: number, axis: 'x' | 'y', value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return;
    const newCoordinates = [...coordinates];
    newCoordinates[index][axis] = numValue;
    setCoordinates(newCoordinates);
  };

  // Update a field for side lengths + diagonals method
  const handleSideLengthsDiagonalsChange = (field: keyof SideLengthsDiagonalsData, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) return;
    setSideLengthsDiagonals({
      ...sideLengthsDiagonals,
      [field]: numValue
    });
  };

  // Update a field for side lengths + angle method
  const handleSideLengthsAngleChange = (field: keyof SideLengthsAngleData, value: string) => {
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue <= 0) return;

    // For angle, ensure it's between 1 and 179 degrees
    if (field === 'angle' && (numValue < 1 || numValue > 179)) return;
    setSideLengthsAngle({
      ...sideLengthsAngle,
      [field]: numValue
    });
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

  // Calculate all deck metrics based on selected method
  const calculateDeckMetricsForSelectedMethod = () => {
    try {
      let area = 0;
      let perimeter = 0;

      // Calculate area and perimeter based on selected method
      if (calculationMethod === "coordinates") {
        area = calculateAreaFromCoordinates(coordinates);
        perimeter = calculatePerimeterFromCoordinates(coordinates);
      } else if (calculationMethod === "sideLengthsDiagonals") {
        area = calculateAreaFromSideLengthsDiagonals(sideLengthsDiagonals);
        perimeter = calculatePerimeterFromSideLengths(sideLengthsDiagonals.sideA, sideLengthsDiagonals.sideB, sideLengthsDiagonals.sideC, sideLengthsDiagonals.sideD);
      } else if (calculationMethod === "sideLengthsAngle") {
        area = calculateAreaFromSideLengthsAngle(sideLengthsAngle);
        perimeter = calculatePerimeterFromSideLengths(sideLengthsAngle.sideA, sideLengthsAngle.sideB, sideLengthsAngle.sideC, sideLengthsAngle.sideD);
      }

      // Validate the shape
      if (!validateShape(area)) {
        toast({
          title: "Invalid Shape",
          description: "Please check your measurements. The shape may be invalid or the measurements you've entered don't form a valid quadrilateral.",
          variant: "destructive"
        });
        return;
      }

      // Calculate materials and set results
      const deckResults = calculateDeckMetrics(area, perimeter);
      setResults(deckResults);

      // Move to results tab
      setActiveTab("results");
      toast({
        title: "Calculations Complete",
        description: "Your deck measurements have been calculated successfully."
      });
    } catch (error) {
      toast({
        title: "Calculation Error",
        description: "There was an error calculating your deck measurements. Please check your inputs.",
        variant: "destructive"
      });
      console.error("Calculation error:", error);
    }
  };

  // Reset to default values
  const handleReset = () => {
    setCoordinates(DEFAULT_COORDINATES);
    setSideLengthsDiagonals(DEFAULT_SIDE_LENGTHS_DIAGONALS);
    setSideLengthsAngle(DEFAULT_SIDE_LENGTHS_ANGLE);
    setMaterials(DEFAULT_MATERIALS);
    setResults(null);
    setActiveTab("input");
    toast({
      title: "Calculator Reset",
      description: "All values have been reset to defaults."
    });
  };

  // Render the appropriate input method
  const renderInputMethod = () => {
    switch (calculationMethod) {
      case "coordinates":
        return <CoordinatesInput coordinates={coordinates} onCoordinateChange={handleCoordinateChange} />;
      case "sideLengthsDiagonals":
        return <SideLengthsDiagonalsInput data={sideLengthsDiagonals} onDataChange={handleSideLengthsDiagonalsChange} />;
      case "sideLengthsAngle":
        return <SideLengthsAngleInput data={sideLengthsAngle} onDataChange={handleSideLengthsAngleChange} />;
      default:
        return null;
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-white to-pelican-cream/30 font-body">
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
            <CardTitle className="text-2xl font-heading text-slate-50">Quadrilateral Deck Calculator</CardTitle>
            <CardDescription className="text-white/90 text-lg">
              Calculate materials and cost for four-sided deck shapes
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="input">1. Input Measurements</TabsTrigger>
                <TabsTrigger value="results" disabled={!results}>2. Results</TabsTrigger>
              </TabsList>
              
              <TabsContent value="input" className="space-y-6">
                {/* Method selector */}
                <MethodSelector method={calculationMethod} onChange={setCalculationMethod} />
                
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2 space-y-6">
                    {/* Dynamic input method */}
                    {renderInputMethod()}
                    
                    <div className="flex justify-between mt-6">
                      <Button variant="outline" onClick={handleReset}>
                        Reset
                      </Button>
                      <Button variant="accent" onClick={calculateDeckMetricsForSelectedMethod}>
                        Calculate Results
                      </Button>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2">
                    <ShapeVisualizer coordinates={visualCoordinates} canvasParams={canvasParams} canvasId="deckCanvas" />
                  </div>
                </div>
                
                <div className="border-t border-pelican-lightGray/20 pt-6 mt-6">
                  <h3 className="text-xl font-medium text-pelican-navy mb-4">Material Costs</h3>
                  <div className="flex flex-col md:flex-row gap-8">
                    <MaterialCostInput materials={materials} onMaterialChange={handleMaterialChange} />
                    <CalculationGuide />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="results" className="space-y-6">
                {results && <ResultsDisplay results={results} materials={materials} canvasWidth={canvasParams.canvasWidth} canvasHeight={canvasParams.canvasHeight} />}
                
                <div className="flex justify-between mt-6">
                  <Button variant="outline" onClick={() => setActiveTab("input")}>
                    Back to Input
                  </Button>
                  <Button variant="accent" onClick={handleReset}>
                    Start New Calculation
                  </Button>
                </div>
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
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Multiple Measurement Methods</h3>
            <p className="text-pelican-slate">Choose from three different ways to calculate your deck area based on the measurements you have available</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Material Estimates</h3>
            <p className="text-pelican-slate">Get detailed breakdowns of decking, framing, and fasteners needed for your project</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pelican-cream">
            <div className="w-12 h-12 rounded-full bg-pelican-lightGray flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pelican-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-medium text-pelican-navy mb-2">Visual Preview</h3>
            <p className="text-pelican-slate">See a real-time visualization of your deck shape as you input measurements</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default QuadrilateralDeckCalculator;