import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Authentication } from "./Authentication";
import { Stats } from "./globalstats/Stats";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const App = () => (
  <>
    <Router>
      <Navbar bg="primary" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>Homerow Brawl</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/stats">
            <Nav.Link>Stats</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
      <Route path="/stats" component={Stats} />
      <Route path="/" exact component={Authentication} />
      <Route path="/:id(\d+)" exact component={Authentication} />
    </Router>
  </>
);
