import { Switch, Redirect, Route } from 'react-router-dom';
import { laurita as Laura} from "./view"

import React from 'react';

/**
 * create a functional object for route control
 * Routes
 *      / ro redirect /login
 *      /login
 *      /inbox
 *      /not-found
 */
const Routes = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/criaturita" />
                <Route path="/criaturita" component={Laura}/>
            <Redirect to="/not-found" />
        </Switch>
    )
}

//Export that
export default Routes;