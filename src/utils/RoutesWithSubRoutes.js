import React from 'react'
import { Route } from 'react-router-dom'

const RoutesWithSubRoutes = (route) => {
    return (
        <Route 
        path = {route.path}
        render={(props)=>(
            <route.component {...props} routes={route.routes} />
            // <Home {...props} routes = {[]}/>
        )}
        />
    )
}

export default RoutesWithSubRoutes
