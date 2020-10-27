import { Container,Button } from 'react-bootstrap'
import styled from 'styled-components'

export const StyeldContainer = styled(Container)`

display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
height: 100%;
width: 100%;
margin-top:100px;
border-radius: 4px;
border: 1px solid #fff;

`;

export const StyledTitle = styled.h1`
margin-top:20px;
color:#fff;

`;

 const StyledInformation = styled.h1`
font-size:18px;
text-align:center;
color: #d5d5d5;

`;

export default StyledInformation



export const StyledList=styled.ul`
padding:100px 10px 10px 10px;
list-style:none;
width:70%;



> li{
    color:#fff;
    display:flex;
    justify-content:space-between;
    margin:10px;
}


`;

export const StyledButton = styled(Button)``;