// Third party
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

// Local
import sidebar from './containers/sidebar'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={sidebar}/>
      </Switch>
    </BrowserRouter>
  )
}