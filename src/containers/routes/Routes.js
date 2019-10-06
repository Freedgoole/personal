import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import {ConnectedRouter} from 'connected-react-router'
import { UPSERT, MAIN, LOGIN } from '../store/constans';
import { history } from '../store/store' 
// components
import Upsert from '../Upsert/Upsert'
import Main from '../Main/Main'
import Login from '../Login/Login'
import PrivateRoute from '../routes/PrivatRoutes'

import {connect} from "react-redux";

const  Routes = props => {
const { loginStatus } = props;
return (
    <BrowserRouter>
        <ConnectedRouter history={history}>
            <Switch>
                <PrivateRoute exact 
                    path={MAIN.ROUTES.MAIN} 
                    component={Main} 
                    loginStatus={loginStatus}
                />
                <PrivateRoute exact 
                    path={UPSERT.ROUTES.UPSERT} 
                    component={Upsert} 
                    loginStatus={loginStatus}
                />
                <PrivateRoute 
                    path={`${UPSERT.ROUTES.UPSERT}/:id`} 
                    component={Upsert}
                    loginStatus={loginStatus}
                />
                <Route 
                    path={LOGIN.ROUTES.LOGIN} 
                    component={Login} 
                />
            </Switch>
        </ConnectedRouter>
    </BrowserRouter>
)
}

function mapStateToProps({loginStatus}) {
    return {
        loginStatus
    }
}

export default connect(mapStateToProps)(Routes);

