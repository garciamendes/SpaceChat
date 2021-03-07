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
    height: 100vh;
    background-image: linear-gradient(to left, #4AD5FF , #1E98BE ); 
`;

export const Login = styled.div`
    text-align: center;
    align-self: center;
    height: 50vh;
    width: 50vh;
    border-radius: 24px;
    background-color: ${COLORS.White};
    

    .logo{
        display: flex;
        justify-content: center;
        padding-top: 10px;
    }

    h1{
        align-items: flex-end;
        padding-top: 5px;
        padding-left: 10px;
        color: #4AD5FF;
        font-size: 26px;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 10%;

    h3{ 

        align-self: flex-start;
        padding-left: 30px;
        padding-bottom: 20px;
        font-size: 16px;
        color: #4AD5FF;
    }

    input{
        margin-bottom: 20px;
        align-self: center;
        padding: 20px;
        width: 80%;
        border-radius: 24px;
        border: none;
        outline: none;
        background-color: #F2F2F2;
    }

    button{
        background-color: ${COLORS.PrimaryColor};
        padding: 10px;
        outline: none;
        border: none;
        border-radius: 24px;
        width: 40%;
        align-self: center;
        color: ${COLORS.White};
        font-size: 24px;
        cursor: pointer;
    }
`;