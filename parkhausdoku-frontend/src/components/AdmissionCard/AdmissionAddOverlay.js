import React, {useState} from "react";
import styled from "styled-components/native";
import {useDispatch} from "react-redux";
import {ADD_ADMISSION} from "../../redux/utils/admission-utils";
import {Button, Input} from "react-native-elements";
import {Dimensions} from "react-native";


export default function AdmissionAddOverlay({onClose,levelId,buildingId}) {
    const dispatch = useDispatch();
    const [information, setInformation] = useState("");

    function handleAdd(info) {
        dispatch({
            type: ADD_ADMISSION,
            payload: {
                information:info,
                buildingId,
                levelId,
            }
        });
        onClose();
    }

    function handleChangeInformation(text) {
        setInformation(text)
    }

    return (
        <Overview>

            <Input
                type="text"
                label="Information"
                value={information}
                onChangeText={text=>handleChangeInformation(text)}
            />
            <Input
                type="text"
                label="Component"
                value="Pillar"
            />
            <Input
                type="text"
                label="Component"
                value="f458e3fd-27rr9c-f458e3fd-27rr9c"
            />
            <Button title={"Add"} disabled={information <1}
                    onPress={() => handleAdd(information)}
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