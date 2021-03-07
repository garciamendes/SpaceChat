// Third party
import styled from 'styled-components'

// Local
import {
  COLORS
} from '../../styles/variables'

export const ContainerChat = styled.div`
  padding: 100px;
  display: flex;
  text-align: center;
  background-color: ${COLORS.ThirdColor};
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

export const Interface = styled.div`

  display: flex;
  justify-content: end;
  margin-left: 50px;
  background-color: ${COLORS.White};
  border-radius: 0 0 24px 24px;
  position: relative;


  .icon{
    padding: 10px 30px 30px 30px;
   
  }
`;

export const Line = styled.div`

  position: absolute;
  width: 100px;
  border: 2px solid ${COLORS.Black};
  background-color: ${COLORS.Black};
  right: 28%;
  bottom: 5%;
  border-radius: 5px;
`;