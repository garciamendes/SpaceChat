// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import Login from './containers/Login'
import Home from './containers/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/home-chat' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}