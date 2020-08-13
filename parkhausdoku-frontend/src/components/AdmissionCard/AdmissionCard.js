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
            <CardBody>
                <Text>Component: Pillar</Text>
                <Text>Identifier: {props.admission.id}</Text>
            </CardBody>
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
  overflow:hidden;
  padding: 10px 10px 10px 10px;
  margin: auto 5px;
`

const CardBody = styled.View`
  width: 130px;
  height:40px;
  overflow:hidden;
`