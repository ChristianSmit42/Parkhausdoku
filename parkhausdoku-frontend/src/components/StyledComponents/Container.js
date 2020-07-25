import React from "react";
import styled from 'styled-components/native'

export default function Container(props){

    return <StyledContainer>{props.children}</StyledContainer>
}
const StyledContainer = styled.View`
    flex:1;
    background-color: #f1f1ef;
    width:100%;
`