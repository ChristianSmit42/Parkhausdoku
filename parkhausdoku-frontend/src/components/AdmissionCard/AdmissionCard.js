import React from "react";
import 'react-native-gesture-handler';
import {Text} from "react-native-elements";
import {DELETE_ADMISSION} from "../../redux/utils/admission-utils";
import {useDispatch} from "react-redux";
import CustomButton from "../StyledComponents/CustomButton";
import styled from "styled-components/native"

export default function AdmissionCard(props){
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({
            type:DELETE_ADMISSION,
            payload:{id:props.id}
        })
    }

    return(
        <Card>
            <Text>{props.information}</Text>
            <CustomButton function={handleDelete} text={"delete"}/>
        </Card>
    )
}



const Card = styled.View`
  width: 150px;
  height: 120px;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 5px 5px 10px 5px;
`