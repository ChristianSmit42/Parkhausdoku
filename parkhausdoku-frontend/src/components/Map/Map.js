import React from "react";
import {Card} from "react-native-elements";
import {SvgUri} from "react-native-svg";
import {Text, View} from "react-native";
import Container from "../StyledComponents/Container";

export default function Map({url}){

    return (
        <Container>
            <View>
                <Text>
                    Titel
                </Text>
            </View>
            <View>
                <SvgUri
                    width='90%'
                    height='90%'
                    uri={url}
                />
            </View>
        </Container>
    )
}
