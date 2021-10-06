import React from "react";
import "./App.css";
import Navigation from "./components/urbint/navigation/Navigation";
import ItemList from "./components/urbint/itemList/ItemList";
import ItemDetails from "./components/urbint/itemDetails/ItemDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation isIconVisible />
        <Switch>
          <Route exact path="/">
            <ItemList />
          </Route>
          <Route path="/details/:id">
            <ItemDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
