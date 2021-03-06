// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import Home from './containers/home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}