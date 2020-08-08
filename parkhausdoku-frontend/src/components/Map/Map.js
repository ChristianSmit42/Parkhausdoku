import React from "react";
import {SvgCssUri} from "react-native-svg";
import {Dimensions} from "react-native";
import Container from "../StyledComponents/Container";
import styled from 'styled-components/native'
import ImageZoom from "react-native-image-pan-zoom";

export default function Map(props){

    return (
        <Container>
            <CenteredView>
                <StyledText>
                   Etage: {props.level}
                </StyledText>
            </CenteredView>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={'95%'}
                       imageWidth={500}
                       imageHeight={500}
            >
                <SvgCssUri
                    width='90%'
                    height='90%'
                    uri={props.url}
                />
            </ImageZoom>
        </Container>
    )
}

const CenteredView = styled.View`
  align-items: center;
  background-color: #172124;
`
const StyledText=styled.Text`
  color: cornsilk;
`