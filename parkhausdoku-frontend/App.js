import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Plan2D from "./components/2DPlan/Plan2D";
import Overview from "./screens/Overview";

export default function App() {
    return <View style={styles.container}>
        <StatusBar style="auto"/>
        <Overview></Overview>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
