import React, {useEffect, useState} from "react";
import Container from "../../components/StyledComponents/Container";
import {Text} from "react-native";
import styled from 'styled-components/native'
import Map from "../../components/Map/Map";
import {serverUrl} from "../../redux/redux-config";
import {listAllLevels} from "../../redux/levels/level-selector";
import {useSelector} from "react-redux";
import Scrollcontainer from "../../components/StyledComponents/Scrollcontainer";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";

export default function Detailscreen({navigation}) {

    const levels = useSelector(listAllLevels);
    const [activeLevel,setActiveLevel]=useState(0)
    const admissions=levels[activeLevel].admissions;
    return (
        <Container>
            <LevelContainer horizontal>
                {levels && levels.map((item, index) => (
                    <ClickableLevel key={item.id} onPress={()=>setActiveLevel(index)}><Text>{item.id}</Text></ClickableLevel>
                ))}
            </LevelContainer>
            <Map url={`${serverUrl}${levels[activeLevel].planUrl}`}/>
            <Scrollcontainer>
                {admissions && admissions.map((item) => (
                    <AdmissionCard key={item.id} information={item.information} id={item.id}/>
                ))}
            </Scrollcontainer>
        </Container>

    )
}

const LevelContainer = styled.ScrollView`
  width:100%;
  max-height: 40px;
`

const ClickableLevel = styled.TouchableOpacity`
  height: 30px;
  width: 50px;
  background-color: white;
  justify-content: center;
  align-items: center;
`