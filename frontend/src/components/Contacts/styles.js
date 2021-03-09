// Third party
import styled from 'styled-components'

// Local
import { COLORS } from '../../styles/variables'

export const ContainerChat = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1% 0;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  transition: .25s;

  &:hover {
    background: rgba(0, 0, 0, .1);
  }
`

export const ImageContent = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 2%;
`

export const ContentUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1% 0;
`

export const Username = styled.span`
  margin-left: 2%;
  font-weight: 500;
  color: ${COLORS.Black};
`

export const RecentPost = styled.span`
  font-size: 12px;
  margin-left: 4%;
  margin-top: 1%;
  color: ${COLORS.MessageColor};
`

export const ContentChat = styled.div`
  margin-left: 6%;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Hours = styled.span`
  font-size: 12px;
  color: ${COLORS.Black};
`

export const IsMessage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  margin-top: 5%;
  border-radius: 50px;
  border: none;
  background: ${COLORS.SecundaryColor};

  span {
    font-size: 14px;
    color: ${COLORS.White}
  }
`