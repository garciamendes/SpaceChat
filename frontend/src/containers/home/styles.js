// Third party
import styled from 'styled-components'

// Local
import {
  COLORS
} from '../../styles/variables'

export const ContainerHome = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  height: 112px;
  background: ${COLORS.PrimaryColor};

  .logo-content {
    margin-left: 2%;
    margin-top: 3px;

    div {
      display: flex;
      align-items: center;
    }
  }
`

export const Logo = styled.span`
  color: ${COLORS.White};
  font-size: 20px;
  font-weight: 700;
  margin-left: 5%;
`

export const ContentSearch = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 35%;
  margin-top: 1%;
  margin-left: 7%;

  .container-search-and-profile {
    display: flex;
    flex-direction: column;
    margin-left: 15%;
    margin-top: 8%;
    width: 80%;

    .profile {
      display: flex;
      align-items: center;
      margin-top: 15px;
      margin-bottom: 12px;

      .username {
        margin-left: 1%;
        color: ${COLORS.White};

        span {
          margin-left: 3%;
          font-size: 12px;
        }
      }

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
`
export const ContentNotifications = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6%;

  div {
    display: flex;
    align-items: center;

    span {
      color: ${COLORS.White};
    }
  }

  .settings {
    cursor: pointer;
    margin-left: 10%;
    color: ${COLORS.White};
  }

  .toggle-notification {
    cursor: pointer;
    font-size: 35px;
    margin-right: 3%;
    margin-left: 3%;
    color: ${COLORS.White};
  }
`

export const InputSearch = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  padding: 3% 0;
  padding-left: 2%;
  font-size: 16px;
  color: ${COLORS.White};
  border: none;
  border-radius: 10px;
  background: ${COLORS.SecundaryColor};

  &::placeholder {
   color: #f2f2f2; 
  }
`

export const ContentMyContact = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  height: 40%;
  margin-top: 1%;
  margin-left: 2%;

  span {
    margin-left: 3%;
    font-weight: 600;
    color: ${COLORS.White};
  }
`

export const ImageContent = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 5%;
`

// Chat
export const ContainerChatMain = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 112px);
`

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24%;
  height: 109%;
  margin-top: -4%;
  margin-left: 2%;
  border-radius: 15px;
  background: ${COLORS.White};
  /* box-shadow: 0 0 30px rgba(0, 0, 0, .2); */

  .content-list-contact {
    overflow: auto;
    height: 100%;

    ::-webkit-scrollbar {
      width: 0;
    }
  }

  .header-select {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3%;
    margin-bottom: 1%;

    .btn-select {
      cursor: pointer;
      outline: none;
      opacity: .5;

      display: flex;
      justify-content: center;
      align-items:  center;
      
      width: 35%;
      padding: 4%;

      background-color: ${COLORS.SecundaryColor};
      color: ${COLORS.White};
      
      border-radius: 25px;
      font-size: 15px;
      border: none;

      .icon-btn {
        margin-right: 6%;
      }

      &.active {
        opacity: 1;
      }
    
    }
  }
`
export const ContainerNavigate = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 10%;
  width: 100%;
  border-radius: 0 0 15px 15px;

  .icon-nav {
    cursor: pointer;
    margin-top: 2%;
    color: ${COLORS.MessageColor};
  }

  .message {
    color: ${COLORS.SecundaryColor}
  }
`

export const ContainerScreenChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 60%;
  margin-left: 6%;
`

export const ScreenChat = styled.div`
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 1%;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const ContentMessages = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

  .all-box-messages {
    position: relative;
    padding: 1% 1% 1% 1%;
    margin: 2% 3%;
    border: none;
    max-width: 40%;
    color: #383838;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }

  .text-messages {
    max-width: 90%;
    margin-left: 1%;
  }
  .right { color: ${COLORS.White}; }

  .hours {
    font-size: 0.9em;
    color: ${COLORS.White};
    position: absolute;
    bottom: 3px;
    right: 10px;
  }
  .left { color: #c5bfbf; }

  .left-messages {
    display: flex;
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 0px 10px 10px 10px;
    background: ${COLORS.ChatLeftBackground};

    &:after {
      content: "";
      position: absolute;
      border-top: 15px solid ${COLORS.ChatLeftBackground};
      border-left: 15px solid transparent;           
      border-radius: 4px 0 0 0px;
      width: 0;
      height: 0;
      top: 0;
      left: 0;
      transform: translateX(-14px);
    }
  }

  .right-messages {
    display: flex;
    justify-content: right;
    align-self: flex-end;
    width: auto;
    height: auto;
    background: #fff;
    border-radius: 10px 0 10px 10px;
    background: ${COLORS.ChatRightBackground};

    &:after {
      content: "";
      position: absolute;
      border-top: 15px solid ${COLORS.ChatRightBackground};
      border-left: 15px solid transparent;           
      border-radius: 4px 0 0 0px;
      width: 0;
      height: 0;
      top: 0;
      right: -14px;
      transform: scaleX(-1);
    }
  }
`

export const SendMessages = styled.div`
  display: flex;
  margin-bottom: 1%;

  .container-input {
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    .anex-icon {
      cursor: pointer;
      margin-top: 1%;
      color: ${COLORS.MessageColor};
    }

    .icon-and-input {
      display: flex;
      position: relative;
      width: 70%;
      

      .send-message {
        overflow: hidden;
        resize: none;
        outline: none;
        width: 100%;
        padding: 1% 2%;
        border-radius: 10px;
        border: none;
        font-size: 17px;
        background: #F2F2F2;
      }

      .icon-emoji {
        cursor: pointer;
        position: absolute;
        right: 5px;
        top: 7px;
        color: ${COLORS.SecundaryColor};
      }
    }

    .content-mic {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background: ${COLORS.PrimaryColor};
      color: ${COLORS.White};
    }

  }
`