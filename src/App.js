import React from "react";
import Header from "./components/Header";
import Liste from "./components/Liste";
import "./App.css";
import UpdateEmloye from "./components/UpdateEmloye";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Liste />
          </Route>
          <Route path="/modifer">
            <UpdateEmloye />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
