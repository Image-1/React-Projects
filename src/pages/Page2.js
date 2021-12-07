import React from 'react'
import { Link, Switch } from 'react-router-dom'
import RoutesWithSubRoutes from '../utils/RoutesWithSubRoutes'

const Page2 = ({routes}) => {
    return (
        <div>
            <div>
            <Link to='/home/page2/page21'>Page21</Link>
            <Link to='/home/page2/page22'>Page22</Link>
            </div>
            <div>
                <Switch>
                    {routes.map((route, i)=>(
                        <RoutesWithSubRoutes key={i} {...route}/>
                    ))}
                </Switch>
            </div>
            
        </div>
    )
}

export default Page2
