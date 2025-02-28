
export interface LaborBurdenInputs {
  baseHourlyRate: number;
  federalTaxRate: number;
  stateTaxRate: number;
  workersCompRate: number;
  healthInsurance: number;
  retirement: number;
  trainingCosts: number;
  otherBenefits: number;
}

export interface LaborBurdenOutputs {
  burdenedRate: number;
  burdenPercentage: number;
}
