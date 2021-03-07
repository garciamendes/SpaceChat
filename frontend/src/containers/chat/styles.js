// Third party
import styled from 'styled-components'

// Local
import {
  COLORS
} from '../../styles/variables'

export const ContainerChat = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
`

export const Chat = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.White};
  position: relative;

  input{
    outline: none;
    border: none;
    border-radius: 40px;
    padding: 10px;
    width: 540px;
    color: ${COLORS.Gray};
  }

  .icon{
    position:absolute;
    right: 1px;
  }
`
export const Audio = styled.div`
  display: flex;
  align-items: center;

  margin-left: 8px;
  padding-left: 2px;
  border-radius: 50%;
  background-color: ${COLORS.PrimaryColor};
  border: solid 5px ${COLORS.PrimaryColor};

  .icon{
    align-self: center;
  }

`;