
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EstimatingMaturity from "./pages/EstimatingMaturity";
import NotFound from "./pages/NotFound";
import LaborBurdenCalculator from "./pages/LaborBurdenCalculator";
import BidHitRatioCalculator from "./pages/BidHitRatioCalculator";
import EstimateAccuracyTracker from "./pages/EstimateAccuracyTracker";
import QuadrilateralDeckCalculator from "./pages/QuadrilateralDeckCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estimating-maturity" element={<EstimatingMaturity />} />
          <Route path="/labor-burden-calculator" element={<LaborBurdenCalculator />} />
          <Route path="/bid-hit-ratio-calculator" element={<BidHitRatioCalculator />} />
          <Route path="/estimate-accuracy-tracker" element={<EstimateAccuracyTracker />} />
          <Route path="/quadrilateral-deck-calculator" element={<QuadrilateralDeckCalculator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
