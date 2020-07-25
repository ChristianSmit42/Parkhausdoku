import React from "react";
import {Header} from "react-native-elements";

export default function Navbar() {

    return <Header
        backgroundColor={'#3089c2'}
        leftComponent={{icon: 'menu', color: '#080b4e'}}
        centerComponent={{text: 'App', style: {color: '#080b4e'}}}
        rightComponent={{icon: 'home', color: '#080b4e'}}
    />

}