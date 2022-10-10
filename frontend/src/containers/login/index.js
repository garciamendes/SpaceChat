// React
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

// Local
import {
  Container,
  Login,
  Form
} from './styles'
import logo from '../../static/images/space.svg'

export default function LoginChat({ socket }) {
  // State
  const [name, setName] = useState('')

  // Hooks
  const history = useHistory()

  function handleGoHome(event) {
    event.preventDefault()

    localStorage.setItem('name', name)
    socket.emit('newUser', { name, socketID: socket.id })
    history.push('/home')
  }


  return (
    <Container>
      <Login>
        <div className='logo'>
          <img src={logo} alt='logo' width='45' height='45' />
          <h2>SpaceChat</h2>
        </div>
        <Form>
          <h3>Nome do usuário</h3>
          <input
            className='input'
            value={name}
            onChange={(e) => setName(e.target.value)} />

          <button onClick={handleGoHome} type='submit'>Sign In</button>
        </Form>
      </Login>
    </Container>
  )
}