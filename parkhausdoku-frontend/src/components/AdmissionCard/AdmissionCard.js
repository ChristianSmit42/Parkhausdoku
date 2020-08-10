import React, {useState} from "react";
import {Overlay, Text} from "react-native-elements";
import styled from "styled-components/native";
import AdmissionOverviewOverlay from "./AdmissionOverviewOverlay";

export default function AdmissionCard(props){
    const [visibleDetail, setVisibleDetail] = useState(false);
    const toggleOverlayDetail = () => {
        setVisibleDetail(!visibleDetail);
    };

    return(
        <Card style={{
            elevation:5,
        }} onPress={toggleOverlayDetail}>
            <Text>{props.admission.information}</Text>
            <Overlay isVisible={visibleDetail} onBackdropPress={toggleOverlayDetail}>
                <AdmissionOverviewOverlay admission={props.admission}/>
            </Overlay>
        </Card>
    )
}



const Card = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  background: #fff;
  justify-content: space-between;
  border-radius:20px;
  padding: 5px 5px 10px 5px;
  margin: auto 5px;
`