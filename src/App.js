import { BrowserRouter, Redirect, Switch} from 'react-router-dom';
import './App.css';
import { routes } from './utils/routers';
import RoutesWithSubRoutes from './utils/RoutesWithSubRoutes';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from='/' to='/login' />
        {routes.map((route, i)=>(
          // <Route to={route.path} render={(props)=>(<route.component {...props} />)} />
          <RoutesWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
