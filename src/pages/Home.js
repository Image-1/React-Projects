import React from 'react'
import { Switch, Link } from 'react-router-dom'
import RoutesWithSubRoutes from '../utils/RoutesWithSubRoutes'

const Home = ({routes}) => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div>
                <Link to="/home/page1">Page1</Link>
                <Link to="/home/page2">Page2</Link>
            </div>
            <div>
                
                <Switch>
                    {routes.map((route, i)=>(
                        <RoutesWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </div>
    )
}

export default Home
