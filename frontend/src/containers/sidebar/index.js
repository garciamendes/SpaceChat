// Local
import {
    SideBar,
    Button,
    ContainerButton,
    ContainerList
} from './styles'

import User1 from './static/user-perfil-1.PNG'


function sidebar() {
    return (
        <SideBar>
            <ContainerButton>
                <Button>Contatos</Button>
                <Button>Times</Button>
            </ContainerButton>
            <ContainerList>
                
            </ContainerList>
        </SideBar>
    )
}

export default sidebar