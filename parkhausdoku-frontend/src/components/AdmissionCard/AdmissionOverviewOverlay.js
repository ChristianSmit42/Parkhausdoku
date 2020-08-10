import React from "react";
import {Text} from "react-native-elements";
import CustomButton from "../StyledComponents/CustomButton";
import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {DELETE_ADMISSION} from "../../redux/utils/admission-utils";




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
            <Text>Admission: {props.admission.id}</Text>
            <Text>Information: {props.admission.information}</Text>
            <CustomButton function={handleDelete} text={"delete"}/>
        </Overview>
    );
}

const Overview = styled.View`
  
`