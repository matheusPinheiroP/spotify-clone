import React from "react";
import { Switch, Route } from "react-router-dom";
import { Flex } from "reflexbox";

import HomePage from "./pages/Home";
import AccountPage from "./pages/Account";
import SideBar from "./components/Siderbar";

function Routes() {
  return (
    <Switch>
      <Flex>
        <SideBar />
        <Route exact path="/" component={HomePage} />
        <Route path="/account" component={AccountPage} />
      </Flex>
    </Switch>
  );
}

export default Routes;
