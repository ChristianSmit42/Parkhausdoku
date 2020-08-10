import React, {useState} from "react";
import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {ADD_ADMISSION} from "../../redux/utils/admission-utils";
import {Button, Input} from "react-native-elements";
import {LOGIN} from "../../redux/utils/auth-utils";


export default function AdmissionAddOverlay({onClose}) {
    const dispatch = useDispatch();
    const [information, setInformation] = useState("");

    function handleAdd(event) {
        dispatch({
            type: ADD_ADMISSION,
            payload: {information}
        });
        onClose();
    }

    function handleChangeInformation(event) {
        setInformation(event.target.value)
    }

    return (
        <Overview>

            <Input
                type="text"
                label="Information"
                value={information}
                onChange={e => handleChangeInformation(e)}
            />
            <Button title={"Add"} disabled={information <1}
                    onPress={() => handleAdd(information)}
            />

        </Overview>
    );
}

const Overview = styled.View`
  
`