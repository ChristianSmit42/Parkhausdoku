import React from "react";
import {Text} from "react-native-elements";
import {DELETE_ADMISSION} from "../../redux/utils/admission-utils";
import {useDispatch} from "react-redux";
import CustomButton from "../StyledComponents/CustomButton";
import styled from "styled-components/native";

export default function AdmissionCard(props){
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({
            type:DELETE_ADMISSION,
            payload:{
                admissionId:props.id,
                buildingId:props.buildingId,
                levelId:props.levelId,
            }
        })
    }

    return(
        <Card style={{
            elevation:5,
        }}>
            <Text>{props.information}</Text>
            <CustomButton function={handleDelete} text={"delete"}/>
        </Card>
    )
}



const Card = styled.View`
  width: 150px;
  height: 120px;
  background: #fff;
  justify-content: space-between;
  border-radius:20px;
  padding: 5px 5px 10px 5px;
  margin: 0 5px 5px 5px;
`