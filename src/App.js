import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import { Layout } from "antd";

function App() {
  return (
    <div className='App'>
      <Layout className='layout bg-white'>
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
