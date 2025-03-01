
// Define types shared across calculator components
export interface Coordinates {
  x: number;
  y: number;
}

export interface DeckResults {
  area: number;
  perimeter: number;
  deckingBoards: number;
  joist: number;
  fascia: number;
  screws: number;
}

export interface MaterialCost {
  deckingCostPerSqFt: number;
  joistCostPerFt: number;
  fasciaCostPerFt: number;
  screwsCostPer100: number;
}

export interface CanvasParams {
  scale: number;
  offsetX: number;
  offsetY: number;
  canvasWidth: number;
  canvasHeight: number;
}

// Default values
export const DEFAULT_COORDINATES: Coordinates[] = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 16 },
  { x: 0, y: 16 }
];

export const DEFAULT_MATERIALS: MaterialCost = {
  deckingCostPerSqFt: 8.50,
  joistCostPerFt: 2.75,
  fasciaCostPerFt: 3.25,
  screwsCostPer100: 12.99
};

export const DEFAULT_CANVAS_PARAMS: CanvasParams = {
  scale: 15,
  offsetX: 50,
  offsetY: 50,
  canvasWidth: 400,
  canvasHeight: 300
};

// Calculation method options
export type CalculationMethod = "coordinates" | "sideLengthsDiagonals" | "sideLengthsAngle";

// Interface for side lengths + diagonals
export interface SideLengthsDiagonalsData {
  sideA: number;
  sideB: number;
  sideC: number;
  sideD: number;
  diagonalAC: number;
  diagonalBD: number;
}

// Default values for side lengths + diagonals
export const DEFAULT_SIDE_LENGTHS_DIAGONALS: SideLengthsDiagonalsData = {
  sideA: 20,
  sideB: 16,
  sideC: 20,
  sideD: 16,
  diagonalAC: 25.6,
  diagonalBD: 25.6
};

// Interface for side lengths + angle
export interface SideLengthsAngleData {
  sideA: number;
  sideB: number;
  sideC: number;
  sideD: number;
  angle: number;
}

// Default values for side lengths + angle
export const DEFAULT_SIDE_LENGTHS_ANGLE: SideLengthsAngleData = {
  sideA: 20,
  sideB: 16,
  sideC: 20,
  sideD: 16,
  angle: 90
};
