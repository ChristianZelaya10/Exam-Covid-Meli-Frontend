import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckComponent from './Components/Check/CheckComponent';

class AppRouter extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={CheckComponent}></Route>
                </Switch>
            </Router>
        )
    }

}

export default AppRouter;