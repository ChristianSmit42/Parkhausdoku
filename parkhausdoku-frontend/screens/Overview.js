import React from 'react';
import {View, Text} from "react-native";
import Plan2D from "../components/2DPlan/Plan2D";

export default function Overview() {
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Plan2D/>
            </View>
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <Text>ES GEHT EINFACH NICHT. </Text>
            </View>

        </View>

    )
}
