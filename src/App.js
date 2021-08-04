import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Modal from "./pages/Modal";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/modal">
          <Modal />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
