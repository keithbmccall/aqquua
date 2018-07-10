import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/layouts/Layout";
import LandingContainer from "./containers/landing/LandingContainer";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import ResearchContainer from "./containers/research/ResearchContainer";
import ProductsContainer from "./containers/products/ProductsContainer";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/" render={props => <LandingContainer />} />
        <Route path="/products" render={props => <ProductsContainer />} />
        {/* <Route exact path="/research" render={props => <ResearchContainer />} /> */}
        {/* <Route path="/" render={() => <Redirect to="/" />} /> */}
      </Switch>
    );
    return (
      <BrowserRouter>
        <Layout>
          <NavbarContainer />
          <div className="App">{routes}</div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
