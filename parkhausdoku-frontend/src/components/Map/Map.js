import React from "react";
import {SvgUri} from "react-native-svg";
import {ActivityIndicator, Text, View} from "react-native";
import Container from "../StyledComponents/Container";
import {Image} from "react-native-elements";
import styled from 'styled-components/native'

export default function Map({url}){

    return (
        <Container>
            <CenteredView>
                <StyledText>
                    Titel
                </StyledText>
            </CenteredView>
            <View>
                <Image
                    source={{uri: url}}
                    style={{ width: '100%', height: '99%' }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                {/*<SvgUri*/}
                {/*    width='90%'*/}
                {/*    height='90%'*/}
                {/*    uri={url}*/}
                {/*/>*/}
            </View>
        </Container>
    )
}

const CenteredView = styled.View`
  align-items: center;
  background-color: #124045;
`
const StyledText=styled.Text`
  color: #c8cdd0;
`