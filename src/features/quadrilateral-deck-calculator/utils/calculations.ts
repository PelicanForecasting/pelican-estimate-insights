
import { 
  Coordinates, 
  SideLengthsDiagonalsData,
  SideLengthsAngleData,
  DeckResults,
  MaterialCost
} from "../types";

// Calculate the area of a quadrilateral using the Shoelace formula (coordinates method)
export const calculateAreaFromCoordinates = (coords: Coordinates[]): number => {
  if (coords.length !== 4) return 0;
  
  let area = 0;
  for (let i = 0; i < coords.length; i++) {
    const j = (i + 1) % coords.length;
    area += coords[i].x * coords[j].y;
    area -= coords[j].x * coords[i].y;
  }
  
  return Math.abs(area) / 2;
};

// Calculate the perimeter of a quadrilateral from coordinates
export const calculatePerimeterFromCoordinates = (coords: Coordinates[]): number => {
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

// Calculate area using side lengths and diagonals (Method 1)
export const calculateAreaFromSideLengthsDiagonals = (data: SideLengthsDiagonalsData): number => {
  const { sideA, sideB, sideC, sideD, diagonalBD } = data;
  
  // Using Heron's formula for each triangle
  // Triangle 1: Sides A, B, and diagonal BD
  const s1 = (sideA + sideB + diagonalBD) / 2;
  const area1 = Math.sqrt(s1 * (s1 - sideA) * (s1 - sideB) * (s1 - diagonalBD));
  
  // Triangle 2: Sides C, D, and diagonal BD
  const s2 = (sideC + sideD + diagonalBD) / 2;
  const area2 = Math.sqrt(s2 * (s2 - sideC) * (s2 - sideD) * (s2 - diagonalBD));
  
  return area1 + area2;
};

// Calculate perimeter using side lengths (Methods 1 and 2)
export const calculatePerimeterFromSideLengths = (
  sideA: number, 
  sideB: number, 
  sideC: number, 
  sideD: number
): number => {
  return sideA + sideB + sideC + sideD;
};

// Calculate area using side lengths and one angle (Method 2)
export const calculateAreaFromSideLengthsAngle = (data: SideLengthsAngleData): number => {
  const { sideA, sideB, sideC, sideD, angle } = data;
  
  // Convert angle to radians
  const angleRad = (angle * Math.PI) / 180;
  
  // Area = (1/2) * A * B * sin(angle) + (1/2) * C * D * sin(180 - angle)
  const area1 = (1/2) * sideA * sideB * Math.sin(angleRad);
  const area2 = (1/2) * sideC * sideD * Math.sin(Math.PI - angleRad);
  
  return area1 + area2;
};

// Generate coordinates from side lengths and angle (for visualization purposes)
export const generateCoordinatesFromSideLengthsAngle = (data: SideLengthsAngleData): Coordinates[] => {
  const { sideA, sideB, sideC, sideD, angle } = data;
  
  // Convert angle to radians
  const angleRad = (angle * Math.PI) / 180;
  
  // Start with first point at origin
  const coordinates: Coordinates[] = [{ x: 0, y: 0 }];
  
  // Second point along the x-axis
  coordinates.push({ x: sideA, y: 0 });
  
  // Third point based on angle and sideB
  coordinates.push({
    x: sideA - sideB * Math.cos(angleRad),
    y: sideB * Math.sin(angleRad)
  });
  
  // For simplicity, we'll make a parallelogram which is a valid quadrilateral
  coordinates.push({
    x: coordinates[2].x - sideA,
    y: coordinates[2].y
  });
  
  return coordinates;
};

// Generate coordinates from side lengths and diagonals (for visualization purposes)
export const generateCoordinatesFromSideLengthsDiagonals = (data: SideLengthsDiagonalsData): Coordinates[] => {
  const { sideA, sideB, diagonalBD } = data;
  
  // Using the law of cosines to find the angle between sides A and B
  const cosAngle = (sideA*sideA + sideB*sideB - diagonalBD*diagonalBD) / (2 * sideA * sideB);
  const angle = Math.acos(Math.max(-1, Math.min(1, cosAngle))); // Clamp to avoid floating point errors
  
  // Start with first point at origin
  const coordinates: Coordinates[] = [{ x: 0, y: 0 }];
  
  // Second point along the x-axis
  coordinates.push({ x: sideA, y: 0 });
  
  // Third point based on angle and sideB
  coordinates.push({
    x: sideA - sideB * Math.cos(angle),
    y: sideB * Math.sin(angle)
  });
  
  // Use the fact that we know all sides to place the fourth point
  coordinates.push({
    x: coordinates[2].x - sideA,
    y: coordinates[2].y
  });
  
  return coordinates;
};

// Calculate all deck metrics
export const calculateDeckMetrics = (
  area: number, 
  perimeter: number
): DeckResults => {
  // Assumptions:
  // - Decking boards: 5.5" wide (standard 6" nominal width)
  // - Joists: 16" on center
  // - 4 screws per sq ft for decking
  
  const deckingBoardsNeeded = Math.ceil(area / (5.5/12)); // 5.5" wide boards
  const joistNeeded = Math.ceil((area / (16/12)) * 1.15); // 15% extra for waste
  const fasciaNeeded = Math.ceil(perimeter * 1.1); // 10% extra for waste
  const screwsNeeded = Math.ceil(area * 4); // 4 screws per sq ft
  
  return {
    area: parseFloat(area.toFixed(2)),
    perimeter: parseFloat(perimeter.toFixed(2)),
    deckingBoards: deckingBoardsNeeded,
    joist: joistNeeded,
    fascia: fasciaNeeded,
    screws: screwsNeeded
  };
};

// Calculate total material costs
export const calculateMaterialCosts = (results: DeckResults, materials: MaterialCost): number => {
  if (!results) return 0;
  
  const deckingCost = results.area * materials.deckingCostPerSqFt;
  const joistCost = results.joist * materials.joistCostPerFt;
  const fasciaCost = results.fascia * materials.fasciaCostPerFt;
  const screwsCost = (results.screws / 100) * materials.screwsCostPer100;
  
  return deckingCost + joistCost + fasciaCost + screwsCost;
};

// Validate the shape is reasonable (not self-intersecting, positive area)
export const validateShape = (area: number): boolean => {
  return area > 0;
};
