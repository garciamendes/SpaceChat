// Local
import { 
    Container,
    Login,
    Form
} from './styles'

import logo from './rocket.svg'



function login() {
    return(
        <Container>
            <Login>
                <div className='logo'>
                    <img src={logo} alt='logo' width='45' height='45' />
                    <h1>SpaceChat</h1>
                </div>
                <Form>
                    <h3>Telefone</h3>
                    <input type='number'/>
                    <h3>Password</h3>
                    <input type='password'/>
                    <button type='submit'>Sign In</button>
                </Form>
            </Login>
        </Container>
    )
}

export default login