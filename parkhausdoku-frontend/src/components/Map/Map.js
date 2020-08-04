import React from "react";
import {SvgCssUri} from "react-native-svg";
import {Dimensions} from "react-native";
import Container from "../StyledComponents/Container";
import styled from 'styled-components/native'
import ImageZoom from "react-native-image-pan-zoom";

export default function Map({url}){

    return (
        <Container>
            <CenteredView>
                <StyledText>
                    Titel
                </StyledText>
            </CenteredView>
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={'95%'}
                       imageWidth={1000}
                       imageHeight={1000}
            >
                <SvgCssUri
                    width='90%'
                    height='90%'
                    uri={url}
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