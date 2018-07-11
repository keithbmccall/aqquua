import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/layouts/Layout";
import LandingContainer from "./containers/landing/LandingContainer";
import ResearchContainer from "./containers/research/ResearchContainer";
import ProductsContainer from "./containers/products/ProductsContainer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import scrollToComponent from "react-scroll-to-component";
//
class App extends Component {
  render() {
    // let routes = (
    //   <Switch>
    //     <Route exact path="/" render={props => <LandingContainer />} />
    //     <Route path="/products" render={props => <ProductsContainer />} />
    //     <Route exact path="/research" render={props => <ResearchContainer />} />
    //     <Route path="/" render={() => <Redirect to="/" />} />
    //   </Switch>
    // );
    let routes = (
      <Route
        render={({ location }) => (
          <div className="App">
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                classNames="swoop"
                timeout={3000}
                onEnter={() => console.log("enttrrr")}
                onExit={() => console.log("exi")}
              >
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={props => <LandingContainer />}
                  />
                  <Route
                    path="/products"
                    render={props => <ProductsContainer />}
                  />
                  <Route
                    exact
                    path="/research"
                    render={props => <ResearchContainer />}
                  />
                  <Route path="/" render={() => <Redirect to="/" />} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )}
      />
    );
    return (
      <BrowserRouter>
        <Layout>
          <NavbarContainer scrollTo={this.scrollTo} />
          {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
