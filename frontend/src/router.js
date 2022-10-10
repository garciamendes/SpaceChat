// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import Login from './containers/login'
import Home from './containers/home'

export default function Routes({ socket }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={() => <Login socket={socket} />} />
        <Route path='/home' render={() => <Home socket={socket} />} />
      </Switch>
    </BrowserRouter>
  )
}