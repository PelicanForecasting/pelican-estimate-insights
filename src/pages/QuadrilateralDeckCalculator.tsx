
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type CalculationMethod = "sides-diagonals" | "sides-angle" | "coordinates";

const QuadrilateralDeckCalculator = () => {
  const { toast } = useToast();
  const [calculationMethod, setCalculationMethod] = useState<CalculationMethod>("sides-diagonals");
  
  // Method 1: Sides and Diagonals
  const [sideA, setSideA] = useState<string>("");
  const [sideB, setSideB] = useState<string>("");
  const [sideC, setSideC] = useState<string>("");
  const [sideD, setSideD] = useState<string>("");
  const [diagonalAC, setDiagonalAC] = useState<string>("");
  const [diagonalBD, setDiagonalBD] = useState<string>("");
  
  // Method 2: Sides and Angle
  const [angleAB, setAngleAB] = useState<string>("");
  
  // Method 3: Coordinates
  const [pointAX, setPointAX] = useState<string>("");
  const [pointAY, setPointAY] = useState<string>("");
  const [pointBX, setPointBX] = useState<string>("");
  const [pointBY, setPointBY] = useState<string>("");
  const [pointCX, setPointCX] = useState<string>("");
  const [pointCY, setPointCY] = useState<string>("");
  const [pointDX, setPointDX] = useState<string>("");
  const [pointDY, setPointDY] = useState<string>("");
  
  // Material estimation
  const [depth, setDepth] = useState<string>("4");
  const [boardWidth, setBoardWidth] = useState<string>("5.5");
  const [costPerSqFt, setCostPerSqFt] = useState<string>("5");
  
  // Results
  const [area, setArea] = useState<number>(0);
  const [concreteVolume, setConcreteVolume] = useState<number>(0);
  const [deckingBoards, setDeckingBoards] = useState<number>(0);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  
  useEffect(() => {
    calculateArea();
  }, [
    calculationMethod, 
    sideA, sideB, sideC, sideD, 
    diagonalAC, diagonalBD, 
    angleAB,
    pointAX, pointAY, pointBX, pointBY,
    pointCX, pointCY, pointDX, pointDY,
    depth, boardWidth, costPerSqFt
  ]);
  
  const calculateArea = () => {
    let calculatedArea = 0;
    
    try {
      if (calculationMethod === "sides-diagonals") {
        // Method 1: Using sides and diagonals
        if (!sideA || !sideB || !sideC || !sideD || !diagonalBD) return;
        
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);
        const d = parseFloat(sideD);
        const bd = parseFloat(diagonalBD);
        
        // Split into two triangles and use Heron's formula
        const s1 = (a + b + bd) / 2;
        const area1 = Math.sqrt(s1 * (s1 - a) * (s1 - b) * (s1 - bd));
        
        const s2 = (c + d + bd) / 2;
        const area2 = Math.sqrt(s2 * (s2 - c) * (s2 - d) * (s2 - bd));
        
        calculatedArea = area1 + area2;
      } else if (calculationMethod === "sides-angle") {
        // Method 2: Using sides and angle
        if (!sideA || !sideB || !sideC || !sideD || !angleAB) return;
        
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);
        const d = parseFloat(sideD);
        const angle = parseFloat(angleAB);
        
        // Convert angle to radians
        const angleRad = angle * Math.PI / 180;
        
        // Calculate area using the formula for quadrilaterals with an angle
        const area1 = (1/2) * a * b * Math.sin(angleRad);
        const area2 = (1/2) * c * d * Math.sin(Math.PI - angleRad);
        
        calculatedArea = area1 + area2;
      } else if (calculationMethod === "coordinates") {
        // Method 3: Using coordinates (Shoelace formula)
        if (!pointAX || !pointAY || !pointBX || !pointBY || 
            !pointCX || !pointCY || !pointDX || !pointDY) return;
        
        const ax = parseFloat(pointAX);
        const ay = parseFloat(pointAY);
        const bx = parseFloat(pointBX);
        const by = parseFloat(pointBY);
        const cx = parseFloat(pointCX);
        const cy = parseFloat(pointCY);
        const dx = parseFloat(pointDX);
        const dy = parseFloat(pointDY);
        
        // Shoelace formula
        calculatedArea = 0.5 * Math.abs(
          (ax * by - bx * ay) +
          (bx * cy - cx * by) +
          (cx * dy - dx * cy) +
          (dx * ay - ax * dy)
        );
      }
      
      setArea(calculatedArea);
      
      // Calculate material estimations
      if (calculatedArea > 0) {
        const depthVal = parseFloat(depth) || 4;
        const boardWidthVal = parseFloat(boardWidth) || 5.5;
        const costVal = parseFloat(costPerSqFt) || 5;
        
        // Concrete volume (cubic yards) = Area × depth ÷ 27
        const concrete = (calculatedArea * (depthVal / 12)) / 27;
        setConcreteVolume(concrete);
        
        // Decking boards (linear feet) = Area × 1.1 ÷ board width
        const decking = calculatedArea * 1.1 / (boardWidthVal / 12);
        setDeckingBoards(decking);
        
        // Estimated cost ($) = Area × cost per square foot
        const cost = calculatedArea * costVal;
        setEstimatedCost(cost);
      }
    } catch (error) {
      console.error("Calculation error:", error);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateArea();
    toast({
      title: "Calculation Complete",
      description: `The area of your deck is ${area.toFixed(2)} square feet`,
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Quadrilateral Deck Area Calculator</h1>
        <p className="mb-6">Calculate the exact area of irregularly shaped decks or concrete pads using different measurement methods. Perfect for estimating material quantities for complex shapes that aren't simple rectangles.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Calculation Methods</CardTitle>
              <CardDescription>Choose a method based on your available measurements</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="calculationMethod">Calculation Method</Label>
                  <Select 
                    value={calculationMethod} 
                    onValueChange={(value) => setCalculationMethod(value as CalculationMethod)}
                  >
                    <SelectTrigger id="calculationMethod">
                      <SelectValue placeholder="Select a calculation method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sides-diagonals">Side lengths + diagonals</SelectItem>
                      <SelectItem value="sides-angle">Side lengths + one angle</SelectItem>
                      <SelectItem value="coordinates">Coordinates of corners</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {calculationMethod === "sides-diagonals" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sideA">Length of Side A (feet)</Label>
                        <Input 
                          id="sideA" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideA}
                          onChange={(e) => setSideA(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sideB">Length of Side B (feet)</Label>
                        <Input 
                          id="sideB" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideB}
                          onChange={(e) => setSideB(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sideC">Length of Side C (feet)</Label>
                        <Input 
                          id="sideC" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideC}
                          onChange={(e) => setSideC(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sideD">Length of Side D (feet)</Label>
                        <Input 
                          id="sideD" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideD}
                          onChange={(e) => setSideD(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="diagonalAC">Length of Diagonal AC (feet)</Label>
                        <Input 
                          id="diagonalAC" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={diagonalAC}
                          onChange={(e) => setDiagonalAC(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="diagonalBD">Length of Diagonal BD (feet)</Label>
                        <Input 
                          id="diagonalBD" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={diagonalBD}
                          onChange={(e) => setDiagonalBD(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {calculationMethod === "sides-angle" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sideA2">Length of Side A (feet)</Label>
                        <Input 
                          id="sideA2" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideA}
                          onChange={(e) => setSideA(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sideB2">Length of Side B (feet)</Label>
                        <Input 
                          id="sideB2" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideB}
                          onChange={(e) => setSideB(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="sideC2">Length of Side C (feet)</Label>
                        <Input 
                          id="sideC2" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideC}
                          onChange={(e) => setSideC(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sideD2">Length of Side D (feet)</Label>
                        <Input 
                          id="sideD2" 
                          type="number" 
                          step="0.01" 
                          min="0" 
                          value={sideD}
                          onChange={(e) => setSideD(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="angleAB">Angle between sides A and B (degrees)</Label>
                      <Input 
                        id="angleAB" 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="180" 
                        value={angleAB}
                        onChange={(e) => setAngleAB(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                )}
                
                {calculationMethod === "coordinates" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pointAX">Point A X-coordinate (feet)</Label>
                        <Input 
                          id="pointAX" 
                          type="number" 
                          step="0.01" 
                          value={pointAX}
                          onChange={(e) => setPointAX(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pointAY">Point A Y-coordinate (feet)</Label>
                        <Input 
                          id="pointAY" 
                          type="number" 
                          step="0.01" 
                          value={pointAY}
                          onChange={(e) => setPointAY(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pointBX">Point B X-coordinate (feet)</Label>
                        <Input 
                          id="pointBX" 
                          type="number" 
                          step="0.01" 
                          value={pointBX}
                          onChange={(e) => setPointBX(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pointBY">Point B Y-coordinate (feet)</Label>
                        <Input 
                          id="pointBY" 
                          type="number" 
                          step="0.01" 
                          value={pointBY}
                          onChange={(e) => setPointBY(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pointCX">Point C X-coordinate (feet)</Label>
                        <Input 
                          id="pointCX" 
                          type="number" 
                          step="0.01" 
                          value={pointCX}
                          onChange={(e) => setPointCX(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pointCY">Point C Y-coordinate (feet)</Label>
                        <Input 
                          id="pointCY" 
                          type="number" 
                          step="0.01" 
                          value={pointCY}
                          onChange={(e) => setPointCY(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pointDX">Point D X-coordinate (feet)</Label>
                        <Input 
                          id="pointDX" 
                          type="number" 
                          step="0.01" 
                          value={pointDX}
                          onChange={(e) => setPointDX(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pointDY">Point D Y-coordinate (feet)</Label>
                        <Input 
                          id="pointDY" 
                          type="number" 
                          step="0.01" 
                          value={pointDY}
                          onChange={(e) => setPointDY(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="pt-4 border-t">
                  <h3 className="text-lg font-medium mb-4">Material Estimation Factors</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="depth">Concrete Depth (inches)</Label>
                      <Input 
                        id="depth" 
                        type="number" 
                        step="0.5" 
                        min="0" 
                        value={depth}
                        onChange={(e) => setDepth(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="boardWidth">Board Width (inches)</Label>
                      <Input 
                        id="boardWidth" 
                        type="number" 
                        step="0.5" 
                        min="0" 
                        value={boardWidth}
                        onChange={(e) => setBoardWidth(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="costPerSqFt">Cost per sq ft ($)</Label>
                      <Input 
                        id="costPerSqFt" 
                        type="number" 
                        step="0.01" 
                        min="0" 
                        value={costPerSqFt}
                        onChange={(e) => setCostPerSqFt(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">Calculate Area</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
              <CardDescription>Calculated area and material estimations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-1">Total Area</h3>
                  <p className="text-3xl font-bold text-blue-600">{area.toFixed(2)} sq ft</p>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Material Estimations</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Concrete Required:</span>
                      <span>{concreteVolume.toFixed(2)} cubic yards</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Decking Boards (linear ft):</span>
                      <span>{deckingBoards.toFixed(2)} linear feet</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="font-medium">Estimated Cost:</span>
                      <span>${estimatedCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-2">Measurement Diagram</h3>
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-4">
                    <div className="text-center text-gray-500">
                      <p>Interactive diagram would appear here showing the shape based on your measurements</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                Note: These calculations assume a flat surface and regular quadrilateral shapes. 
                Add 10-15% extra material for cuts, waste, and irregularities.
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">How to Use This Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-2">Side Lengths + Diagonals Method</h3>
              <p className="text-sm">
                Measure all four sides of your quadrilateral plus at least one diagonal measurement. 
                This method works well for irregular shapes where you can physically measure each edge and diagonal.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Side Lengths + Angle Method</h3>
              <p className="text-sm">
                Measure all four sides of your quadrilateral plus the angle between two adjacent sides.
                This method is useful when you have an angle finder tool available.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Coordinates Method</h3>
              <p className="text-sm">
                Establish a reference point and measure the X-Y coordinates of each corner. 
                This method is ideal for working from blueprints or when using surveying equipment.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuadrilateralDeckCalculator;
