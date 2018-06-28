import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Layout from "./hoc/layouts/Layout";
import LandingContainer from "./containers/landing/LandingContainer";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import { sectionData, headerContent, aqquuaHead, navbarLinks } from "./data";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <LandingContainer
              sectionData={sectionData}
              headerContent={headerContent}
              aqquuaHead={aqquuaHead}
            />
          )}
        />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    );
    return (
      <BrowserRouter>
        <Layout>
          <NavbarContainer aqquuaHead={aqquuaHead} navbarLinks={navbarLinks} />
          <div className="App">{routes}</div>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
