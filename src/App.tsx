import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Kinderarzt from "./pages/Kinderarzt";
import Ergotherapie from "./pages/Ergotherapie";
import NeuroPerspektiven from "./pages/NeuroPerspektiven";
import Physiotherapie from "./pages/MandyHaase";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/kinderarzt" element={<Kinderarzt />} />
          <Route path="/ergotherapie" element={<Ergotherapie />} />
          <Route path="/neuroperspektiven" element={<NeuroPerspektiven />} />
          <Route path="/mandyhaase" element={<Physiotherapie />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;