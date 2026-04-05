import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/service" component={Service} />
      <Route path="/company" component={Company} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
