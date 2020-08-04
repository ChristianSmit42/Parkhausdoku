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

export default function Detailscreen({navigation, route}) {
    const buildingId = route.params.id;
    const levels = useSelector(listAllLevels);
    const [activeLevel, setActiveLevel] = useState(0)
    const admissions = levels[activeLevel].admissions;
    return (
        <Container>
            <LevelContainer horizontal>
                {levels && levels.map((item, index) => (
                    <ClickableLevel key={item.id}
                                    onPress={() => setActiveLevel(index)}
                                    style={{
                        elevation: 10,
                    }}
                    ><Text>Etage: {item.level}</Text></ClickableLevel>
                ))}
            </LevelContainer>
            <Map
                url={`${serverUrl}${levels[activeLevel].planUrl}`}
                level={levels[activeLevel].level}
            />
            <AdmissionContainer horizontal>
                {admissions && admissions.map((item) => (
                    <AdmissionCard
                        key={item.id}
                        buildingId={buildingId}
                        levelId={levels[activeLevel].id}
                        levelIndex={activeLevel}
                        information={item.information}
                        id={item.id}/>
                ))}
            </AdmissionContainer>
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