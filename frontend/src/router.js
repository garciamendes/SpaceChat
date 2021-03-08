// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import login from './containers/login'
import Home from './containers/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={login}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}