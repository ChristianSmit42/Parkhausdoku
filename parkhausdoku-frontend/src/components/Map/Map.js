import React from "react";
import {SvgUri} from "react-native-svg";
import {ActivityIndicator, Dimensions, Text, View} from "react-native";
import Container from "../StyledComponents/Container";
import {Image} from "react-native-elements";
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
                       imageWidth={500}
                       imageHeight={500}>
                <SvgUri
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