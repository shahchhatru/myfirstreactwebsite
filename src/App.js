import React from "react";
import PageWrapper from "./components/pagewrapper";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/Common/Portfolio";
import Team from "./components/Common/Team";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/team" component={Team} />
        <Route path="/contact" component={Contact} />
      </PageWrapper>
    </Router>
  );
}

export default App;
