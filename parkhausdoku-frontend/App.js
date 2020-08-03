
import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./src/screens/auth/LoginScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider, useSelector} from 'react-redux'
import {configureStore} from "./src/redux/store";
import HomeScreen from "./src/screens/main/HomeScreen";
import {isUserAuthenticated} from "./src/redux/auth/auth-selector";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detailscreen from "./src/screens/main/Detailscreen";
import {StatusBar} from "react-native";
import Navbar from "./src/components/Navbar/Navbar";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    return <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>;
}

function HomeStack() {
    return <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Settings" component={Detailscreen}/>
    </Tab.Navigator>
}

function RootNavigation() {
    const authenticated = useSelector(isUserAuthenticated)

    return <NavigationContainer>
        {authenticated ? <HomeStack/> : <AuthStack/>}
    </NavigationContainer>;
}


export default function App() {
    const {store, persistor} = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaProvider>
                    <StatusBar/>
                    <Navbar/>
                    <RootNavigation/>
                </SafeAreaProvider>
            </PersistGate>
        </Provider>
    );
}




