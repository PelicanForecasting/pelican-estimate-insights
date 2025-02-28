
import { LaborBurdenInputs, LaborBurdenOutputs } from '../types';

export const calculateLaborBurden = (inputs: LaborBurdenInputs): LaborBurdenOutputs => {
  if (!inputs.baseHourlyRate) {
    return {
      burdenedRate: 0,
      burdenPercentage: 0
    };
  }

  // Calculate burden costs per hour
  const taxes = inputs.baseHourlyRate * ((inputs.federalTaxRate + inputs.stateTaxRate) / 100);
  const workersComp = inputs.baseHourlyRate * (inputs.workersCompRate / 100);
  const totalBurden = taxes + workersComp + inputs.healthInsurance + inputs.retirement + inputs.trainingCosts + inputs.otherBenefits;
  
  // Calculate total burdened rate
  const burdenedRate = inputs.baseHourlyRate + totalBurden;
  
  // Calculate burden as percentage of base rate
  const burdenPercentage = (totalBurden / inputs.baseHourlyRate) * 100;

  return {
    burdenedRate,
    burdenPercentage
  };
};
