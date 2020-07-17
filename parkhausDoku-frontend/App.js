import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import Plan2D from "./components/2DPlan/Plan2D";

export default function App() {
  return (
      <SafeAreaProvider forceInset={{ top: 'always' }}>
        <View style={styles.container}>
            <Plan2D/>
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
