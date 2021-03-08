// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import Home from './containers/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}