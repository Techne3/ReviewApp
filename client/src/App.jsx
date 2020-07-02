import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetail from "./routes/RestaurantDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants/:id/update" component={UpdatePage} />
          <Route path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
