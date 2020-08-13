import React from "react";
import {Button, Text} from "react-native-elements";
import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {DELETE_ADMISSION} from "../../redux/utils/admission-utils";
import {Dimensions} from "react-native";




export default function AdmissionOverviewOverlay(props){
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({
            type:DELETE_ADMISSION,
            payload:{
                admission:props.admission
            }
        })
    }

    return(
        <Overview>
            <Text>Component: Pillar</Text>
            <Text>Identifier: {props.admission.id}</Text>
            <Text h3>{props.admission.information}</Text>
            <Button title={"Delete"} onPress={handleDelete}
                    buttonStyle={{ height: 50, backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: 5 }}
                    textStyle={{ fontWeight: 'bold', fontSize: 23 }}
            />
        </Overview>
    );
}

const windowWidth = Dimensions.get('window').width-50;

const Overview = styled.View`
  width: ${windowWidth}px;
`
