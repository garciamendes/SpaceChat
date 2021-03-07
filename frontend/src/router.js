// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import login from './containers/login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={login}/>
      </Switch>
    </BrowserRouter>
  )
}