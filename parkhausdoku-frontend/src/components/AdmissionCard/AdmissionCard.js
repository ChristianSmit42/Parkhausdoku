import React from "react";
import {Button, Text} from "react-native-elements";
import Container from "../StyledComponents/Container";
import {DELETE_ADMISSION} from "../../redux/utils/admission-utils";
import {useDispatch} from "react-redux";

export default function AdmissionCard(props){
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({type:DELETE_ADMISSION})
    }

    return(
        <Container>
            <Text>{props.information}</Text>
            <Button onPress={handleDelete}/>
        </Container>
    )
}