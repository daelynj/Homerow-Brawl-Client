import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Authentication } from "./Authentication";
import { Stats } from "./globalstats/Stats";

export const App = () => (
  <Router>
    <div>
      <nav>
        <Link to="/stats">Stats</Link>
      </nav>

      <Route path="/stats/" component={Stats} />
      <Route path="/" exact component={Authentication} />
      <Route path="/:id(\d+)" exact component={Authentication} />
    </div>
  </Router>
);
