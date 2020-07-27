import React from "react";
import styled from "styled-components/native"

export default function CustomButton(props){
   return (

           <ButtonContainer onPress={props.function}>
               <ButtonText>{props.text}</ButtonText>
           </ButtonContainer>
   )};


const ButtonContainer = styled.TouchableOpacity`
    border-radius: 50px;
    background: #4c94e5;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
`;

const ButtonText = styled.Text`
    font-size: 15px;
    color: #ffffff;
    text-align: center;
`;
