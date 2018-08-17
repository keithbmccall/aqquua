import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
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
import RecipesContainer from "./containers/recipes/RecipesContainer";
//

const transitionTime = 1000;
class App extends Component {
  constructor() {
    super();
    this.state = {
      transition: false
    };
  }
  render() {
    let routes = (
      <Route
        render={({ location }) => (
          <Fragment>
            <NavbarContainer />
            <main>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="swoop"
                  timeout={transitionTime}
                  onEnter={() =>
                    this.setState({
                      transition: true
                    })
                  }
                  onExited={() => {
                    this.setState({
                      transition: false
                    });

                    () =>
                      setTimeout(
                        () =>
                          this.props.location.hash
                            ? false
                            : window.scrollTo(0, 0),
                        500
                      );
                  }}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={props => <LandingContainer {...props} />}
                    />
                    <Route
                      path="/#"
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
                      exact
                      path="/products/:id"
                      render={props => <ProductsContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/university-research/:id"
                      render={props => <ResearchContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/eatfish"
                      render={props => <EatFishContainer {...props} />}
                    />
                    <Route
                      exact
                      path="/recipes/tips"
                      render={props => <RecipesContainer {...props} />}
                    />
                    <Route path="/" render={() => <Redirect to="/" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
          </Fragment>
        )}
      />
    );
    // let routes = (
    //   <Switch>
    //     <Route
    //       exact
    //       path="/"
    //       render={props => <LandingContainer {...props} />}
    //     />
    //     <Route
    //       exact
    //       path="/farm"
    //       render={props => <FarmContainer {...props} />}
    //     />
    //     <Route
    //       exact
    //       path="/genetics"
    //       render={props => <GeneticsContainer {...props} />}
    //     />
    //     <Route
    //       exact
    //       path="/sustainability"
    //       render={props => <SustainabilityContainer {...props} />}
    //     />

    //     <Route
    //       exact
    //       path="/products/:id"
    //       render={props => <ProductsContainer {...props} />}
    //     />
    //     <Route
    //       exact
    //       path="/university-research/:id"
    //       render={props => <ResearchContainer {...props} />}
    //     />
    //     <Route
    //       exact
    //       path="/eatfish"
    //       render={props => <EatFishContainer {...props} />}
    //     />
    //     <Route path="/" render={() => <Redirect to="/" />} />
    //   </Switch>
    // );

    return <Layout transition={this.state.transition}>{routes}</Layout>;
  }
}

export default withRouter(App);
