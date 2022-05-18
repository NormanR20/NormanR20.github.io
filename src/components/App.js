import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/PortafolioDigital" component={Inicio} exact />
        {/* <Route path="*" component={ NotFound } /> */}
      </Switch>
    </Router>
  );
}

export default App;
