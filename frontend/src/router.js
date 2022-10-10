// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import Login from './containers/login'
import Home from './containers/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact component={Login}/> */}
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}