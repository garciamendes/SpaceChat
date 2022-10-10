// Third party
import { connect } from 'socket.io-client'

// Local
import Routes from './router'
import {
  GlobalStyle
} from './styles/global'

// Others
const socket = connect('http://localhost:3001')

export default function App() {
  return (
    <>
      <Routes socket={socket} />
      <GlobalStyle />
    </>
  )
}
