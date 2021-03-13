// Third party
import styled from 'styled-components'

// Local
import {
  COLORS
} from '../../styles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  background-image: linear-gradient(to left, #4AD5FF , #1E98BE ); 
`

export const Login = styled.div`
  text-align: center;
  align-self: center;
  width: 35%;
  height: 70%;
  border-radius: 24px;
  background-color: ${COLORS.White};
  box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2%;

    h2{
      padding-left: 2%;
      color: #4AD5FF;
    }
  }
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  padding-top: 3%;

  h3 { 
    align-self: flex-start;
    padding-left: 10%;
    padding-bottom: 2%;
    font-size: 16px;
    color: #4AD5FF;
  }

  .input {
    margin-bottom: 3%;
    align-self: center;
    text-align: center;
    font-size: 20px;
    padding: 3% 0;
    width: 80%;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #F2F2F2;
    color: ${COLORS.PrimaryColor};
  }

  button {
    background-color: ${COLORS.PrimaryColor};
    padding: 2%;
    margin-top: 4%;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 80%;
    align-self: center;
    color: ${COLORS.White};
    font-size: 24px;
    cursor: pointer;
  }

  .password-content {
    position: relative;
    display: flex;
    align-self: center;
    width: 80%;

    input {
      width: 100%;
      padding: 4% 0;
    }

    .eye-icon {
      cursor: pointer;
      position: absolute;
      top: 15px;
      right: 15px;
      color: ${COLORS.PrimaryColor};
    }
  }
`