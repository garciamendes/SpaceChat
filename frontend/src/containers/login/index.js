// React
import { useState } from 'react'

// Third party
import InputMask from "react-input-mask"
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5'

// Local
import {
  Container,
  Login,
  Form
} from './styles'
import logo from '../../static/images/space.svg'

export default function LoginChat({ history }) {

  const [eyePassword, setEyePassword] = useState(false)

  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  function handleGoHome(event) {
    event.preventDefault()

    if (number !== '' && password !== '') {
      history.push('home-chat')
    } else {
      alert('Please fill in all fields')
    }


  }

  function showPassword() {
    setEyePassword(eyePassword ? false : true)
  }

  return (
    <Container>
      <Login>
        <div className='logo'>
          <img src={logo} alt='logo' width='45' height='45' />
          <h2>SpaceChat</h2>
        </div>
        <Form>
          <h3>Telefone</h3>
          <InputMask
            mask='(99) 9 9999-9999'
            className='input'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <h3>Password</h3>
          <div className='password-content'>
            <input
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={eyePassword ? 'text' : 'password'}
            />
            {eyePassword ? (
              <IoEyeOffOutline size={35} onClick={showPassword} className='eye-icon' />
            ) : (
              <IoEyeOutline size={35} onClick={showPassword} className='eye-icon' />
            )
            }

          </div>
          <button onClick={handleGoHome} type='submit'>Sign In</button>
        </Form>
      </Login>
    </Container>
  )
}