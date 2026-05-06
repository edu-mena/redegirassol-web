import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Multiplataformas from "./pages/Multiplataformas";
import TV from "./pages/TV";
import FM from "./pages/FM";
import Noticias from "./pages/Noticias";
import Negocios from "./pages/Negocios";
import Giraplay from "./pages/Giraplay";
import Marketplace from "./pages/Marketplace";
import AppPage from "./pages/AppPage";
import Contactos from "./pages/Contactos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/multiplataformas" element={<Multiplataformas />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/fm" element={<FM />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/negocios" element={<Negocios />} />
          <Route path="/giraplay" element={<Giraplay />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
