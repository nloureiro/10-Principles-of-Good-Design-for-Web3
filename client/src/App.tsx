import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import PrincipleDetail from "@/pages/PrincipleDetail";
import PrinciplesIndex from "@/pages/PrinciplesIndex";
import AllPrinciples from "@/pages/AllPrinciples";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <PageTransition>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/all" component={AllPrinciples} />
            <Route path="/principles" component={PrinciplesIndex} />
            <Route path="/principles/:slug" component={PrincipleDetail} />
            <Route component={NotFound} />
          </Switch>
        </PageTransition>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
