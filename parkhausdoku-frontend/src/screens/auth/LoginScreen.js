import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Input} from "react-native-elements";
import {useDispatch} from "react-redux";

export default function LoginScreen() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    return <SafeAreaView style={styles.container}>

        <View>

            <Input
                placeholder='username'
                value={username}
                onChangeText={(text) => setUserName(text)}
                containerStyle={styles.loginField}
            />
            <Input
                placeholder='password'
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                containerStyle={styles.loginField}
            />

            <Button title={"Login"} disabled={username.length <1 || password < 1}
                    onPress={() => dispatch({type: "LOGIN", payload: {username, password}})}
            />

        </View>

    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginField: {
        minWidth: 250
    }
});