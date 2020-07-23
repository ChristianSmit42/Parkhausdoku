import React from "react";
import styled from 'styled-components/native'

export default function Scrollcontainer(props){

    return <StyledContainer>{props.children}</StyledContainer>
}
const StyledContainer = styled.ScrollView`
    max-height:30%;
`