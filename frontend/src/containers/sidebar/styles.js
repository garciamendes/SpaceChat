// Third party
import styled from 'styled-components'

// Local
import {
  COLORS
} from '../../styles/variables'

export const SideBar = styled.div`
  background-color: ${COLORS.Black};
  width: 346px;
  height: 100vh;
  border-radius: 24px;
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 10px;
  background: #222222;
  overflow-x: hidden;
  padding: 8px 0;

`

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    background-color: ${COLORS.SecundaryColor};
    color: ${COLORS.White};
    padding: 4px;
    border-radius: 24px;
    height: 35px;
    width: 92px;
    border: none;
`

export const ContainerList = styled.div`

`;