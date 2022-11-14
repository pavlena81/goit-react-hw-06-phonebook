import styled from 'styled-components';

export const Label = styled.label`
display: flex;
flex-direction: column;
padding-top: 20px;
`
export const Input = styled.input`
font-size: 18px;
padding: 10px 15px;
margin: 10px;
border: 2px solid #D4E6F1;
border-radius: 2px;
     &:focus{
        outline:none;
        border-radius: 6px;
        box-shadow: 0 0 10px #93caff;
    }
`