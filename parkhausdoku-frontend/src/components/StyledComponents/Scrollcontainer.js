import React from "react";
import styled from 'styled-components/native'

export default function Scrollcontainer(props){

    return <StyledContainer horizontal={true}>{props.children}</StyledContainer>
}
const StyledContainer = styled.ScrollView`
  max-height:20%;
`