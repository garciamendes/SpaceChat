// Local
import { 
    Container,
    Login,
    Form
} from './styles'

import logo from './rocket.svg'
import InputMask from "react-input-mask";


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
                    <InputMask mask='(99) 9 9999-9999' />
                    <h3>Password</h3>
                    <input type='password'/>
                    <button type='submit'>Sign In</button>
                </Form>
            </Login>
        </Container>
    )
}

export default login