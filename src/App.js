import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/layouts/Layout";
import LandingContainer from "./containers/landing/LandingContainer";
import ResearchContainer from "./containers/research/ResearchContainer";
import ProductsContainer from "./containers/products/ProductsContainer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import FarmContainer from "./containers/farm/FarmContainer";
import GeneticsContainer from "./containers/genetics/GeneticsContainer";
import EatFishContainer from "./containers/eatfish/EatFishContainer";
import SustainabilityContainer from "./containers/sus/SustainabilityContainer";
//

const transitionTime = 1000;
class App extends Component {
  render() {
    let routes = (
      <Route
        render={({ location }) => (
          <Layout>
            <NavbarContainer />
            <div className="App">
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="swoop"
                  timeout={transitionTime}
                  onEntered={() =>
                    setTimeout(window.scrollTo(0, 0), transitionTime)
                  }
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={props => <LandingContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/farm"
                      render={props => <FarmContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/genetics"
                      render={props => <GeneticsContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/sustainability"
                      render={props => <SustainabilityContainer {...props} />}
                    />

                    <Route
                      path="/products/:id"
                      render={props => <ProductsContainer {...props} />}
                    />
                    <Route
                      path="/university-research/:id"
                      render={props => <ResearchContainer {...props} />}
                    />
                    <Route
                      path="/eatfish"
                      render={props => <EatFishContainer {...props} />}
                    />
                    {/* <Route path="/" render={() => <Redirect to="/" />} /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </Layout>
        )}
      />
    );
    // let routes = (
    //   <Switch>
    //     <Route exact path="/" render={props => <LandingContainer />} />
    //     <Route path="/products" render={props => <ProductsContainer />} />
    //     <Route exact path="/research" render={props => <ResearchContainer />} />
    //     <Route path="/" render={() => <Redirect to="/" />} />
    //   </Switch>
    // );

    return <BrowserRouter>{routes}</BrowserRouter>;
  }
}

export default App;
