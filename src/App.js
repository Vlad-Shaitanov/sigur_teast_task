import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Step1 } from "./components/Step1/Step1";
import { Step2 } from "./components/Step2/Step2";
import { Step3 } from "./components/Step3/Step3";
import { Step4 } from "./components/Step4/Step4";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Step1 />
          </Route>
          <Route exact path="/step2">
            <Step2 />
          </Route>
          <Route exact path="/step3">
            <Step3 />
          </Route>
          <Route exact path="/result">
            <Step4 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
