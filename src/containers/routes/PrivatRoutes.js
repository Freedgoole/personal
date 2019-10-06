import React from 'react'
import { Route } from 'react-router'
import { Redirect } from 'react-router-dom'

const PrivateRoute = props => {
    const { component: Component, loginStatus, ...rest } = props;
    return (
        <Route
            {...rest}
            render={ 
                props => loginStatus ? 
                    ( <Component {...props} /> ) : 
                    ( <Redirect to={{ pathname: '/login' }}/> )
                }
        />
    )
}

export default PrivateRoute;