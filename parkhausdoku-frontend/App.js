import 'react-native-gesture-handler';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "./src/screens/auth/LoginScreen";
import {Provider, useSelector} from 'react-redux'
import {configureStore} from "./src/redux/store";
import HomeScreen from "./src/screens/main/HomeScreen";
import {isUserAuthenticated} from "./src/redux/auth/auth-selector";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detailscreen from "./src/screens/main/Detailscreen";
import {StatusBar} from "react-native";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
    return <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>;
}

function HomeStack() {
    return <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={Detailscreen}/>
    </Stack.Navigator>
}

function RootNavigation() {
    const authenticated = useSelector(isUserAuthenticated)

    return <NavigationContainer>
        <StatusBar/>
        {authenticated ? <HomeStack/> : <AuthStack/>}
    </NavigationContainer>;
}


export default function App() {
    const {store, persistor} = configureStore();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                    <RootNavigation/>
            </PersistGate>
        </Provider>
    );
}




