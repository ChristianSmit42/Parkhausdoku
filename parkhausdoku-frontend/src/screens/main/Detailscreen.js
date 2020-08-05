import React, {useEffect, useState} from "react";
import Container from "../../components/StyledComponents/Container";
import {Text} from "react-native";
import styled from 'styled-components/native'
import Map from "../../components/Map/Map";
import {serverUrl} from "../../redux/redux-config";
import {listAllLevels} from "../../redux/levels/level-selector";
import {useSelector} from "react-redux";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";

export default function Detailscreen({navigation, route}) {
    const levels = useSelector(listAllLevels).filter(level=>(
        level.buildingId=== route.params.id
    ));


    console.log(route)
    return (
        <Container>
            <LevelContainer horizontal>
                {levels && levels.map((item, index) => (
                    <ClickableLevel key={item.id}
                                    onPress={() => setActiveLevel(index)}  // use id to display level
                                    style={{
                        elevation: 10,
                    }}
                    ><Text>Etage: {item.level}</Text></ClickableLevel>
                ))}
            </LevelContainer>
            {/*<Map*/}
            {/*    url={`${serverUrl}${levels[activeLevel].planUrl}`}*/}
            {/*    level={levels[activeLevel].level}*/}
            {/*/>*/}
            {/*<AdmissionContainer horizontal>*/}
            {/*    {admissions && admissions.map((item) => (*/}
            {/*        <AdmissionCard*/}
            {/*            key={item.id}*/}
            {/*            buildingId={buildingId}*/}
            {/*            levelId={levels[activeLevel].id}*/}
            {/*            information={item.information}*/}
            {/*            id={item.id}/>*/}
            {/*    ))}*/}
            {/*</AdmissionContainer>*/}
        </Container>

    )
}

const LevelContainer = styled.ScrollView`
  width:100%;
  max-height: 60px;
`

const ClickableLevel = styled.TouchableOpacity`
  height: 40px;
  max-width: 100px;
  border-radius: 5px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin: auto 5px;
  padding: 0 5px;
`

const AdmissionContainer = styled.ScrollView`
  max-height:20%;
`