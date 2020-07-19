import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet,View} from 'react-native';
import Overview from "./screens/Overview";

export default function App() {
    return <View style={styles.container}>
        <StatusBar style="auto"/>
        <Overview/>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
