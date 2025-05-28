import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Kinderarztpraxis from "./pages/Kinderarztpraxis";
import Ergotherapie from "./pages/Ergotherapie";
import NeuroPerspektiven from "./pages/NeuroPerspektiven";
import Physiotherapie from "./pages/Physiotherapie";

// Create a client that persists between renders
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    },
  },
});

// Router that works in both browser and SSR environments
const Router = ({ children }) => {
  // Check if we're in the browser or SSR
  const isBrowser = typeof window !== 'undefined';
  
  if (isBrowser) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  
  // In SSR context, we don't need a router wrapper
  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Conditionally render these components only in browser */}
        {typeof window !== 'undefined' && (
          <>
            <Toaster />
            <Sonner />
          </>
        )}
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/kinderarztpraxis" element={<Kinderarztpraxis />} />
            <Route path="/ergotherapiebusse" element={<Ergotherapie />} />
            <Route path="/neuroperspektiven" element={<NeuroPerspektiven />} />
            <Route path="/raum-fur-haltung-bewegung-und-balance" element={<Physiotherapie />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;