import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/Landing";
import SenderDashboard from "@/pages/SenderDashboard";
import TravelerDashboard from "@/pages/TravelerDashboard";
import Notifications from "@/pages/Notifications";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/sender" component={SenderDashboard} />
      <Route path="/traveler" component={TravelerDashboard} />
      <Route path="/notifications" component={Notifications} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
