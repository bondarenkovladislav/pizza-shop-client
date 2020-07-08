import * as React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import Layout from "../../common/Layout";
import About from "../About";
import Home from "../Home";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Layout>
        <Route exact={true} path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Layout>
    </Switch>
  );
};

export default App;
