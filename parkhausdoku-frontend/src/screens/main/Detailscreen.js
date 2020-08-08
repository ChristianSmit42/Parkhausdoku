import React, {useEffect, useState} from "react";
import Container from "../../components/StyledComponents/Container";
import {Text} from "react-native";
import styled from 'styled-components/native'
import Map from "../../components/Map/Map";
import {serverUrl} from "../../redux/redux-config";
import {listAllLevels} from "../../redux/levels/level-selector";
import {useSelector} from "react-redux";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";
import {listAllAdmissions} from "../../redux/admissions/admission-selector";

export default function Detailscreen({navigation, route}) {
    const buildingId = route.params.id;
    const [activeLevel, setActiveLevel] = useState({});
    const [activeAdmissions, setActiveAdmissions] = useState([]);
    const levels = useSelector(listAllLevels).filter(level=>(level.buildingId === buildingId)).sort((a,b)=> a.level - b.level);
    const admissions = useSelector(listAllAdmissions).filter(admission=>(admission.buildingId === buildingId));


    useEffect(
        ()=> {
            setActiveLevel(levels[0]);
            setActiveAdmissions(admissions.filter(admission=>(admission.levelId === levels[0].id)));
        },[buildingId]
    )

    function handleLevelChange(id){
        setActiveLevel(levels.find(level => (level.id === id)));
        setActiveAdmissions(admissions.filter(admission=>(admission.levelId === id)))
    }

    return (
        <Container>
            <LevelContainer horizontal>
                {levels && levels.map((item) => (

                    <ClickableLevel key={item.id}
                                    onPress={()=>handleLevelChange(item.id)}
                                    style={{
                                        elevation: 10,
                                    }}
                    ><Text>Etage: {item.level}</Text></ClickableLevel>
                ))}
            </LevelContainer>
                {activeLevel.planUrl ?
                    <Map
                    url={`${serverUrl}${activeLevel.planUrl}`}
                    level={activeLevel.level}
                />
                :
                    <Text> no Plan exists </Text>
                }
            <AdmissionContainer horizontal>
                {activeAdmissions && activeAdmissions.map((item) => (
                    <AdmissionCard
                        key={item.id}
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