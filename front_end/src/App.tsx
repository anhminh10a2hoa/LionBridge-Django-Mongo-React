import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListItemController from "./containers/ListItem/ListItemController";
import FormsController from "./containers/FormsController/FormsController";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <h2>ITEM LIST</h2>
            <ListItemController />
          </Route>
          <Route exact path="/listitem/:id" render={(props) => <div><h2>EDIT ITEM</h2><FormsController {...props}/></div>}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
