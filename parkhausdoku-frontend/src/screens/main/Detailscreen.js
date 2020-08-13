import React, {useEffect, useState} from "react";
import Container from "../../components/StyledComponents/Container";
import {Text} from "react-native";
import styled from 'styled-components/native'
import Map from "../../components/Map/Map";
import {serverUrl} from "../../redux/redux-config";
import {listLevelBuilding} from "../../redux/levels/level-selector";
import {useSelector} from "react-redux";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";
import {listAdmissionsLevel} from "../../redux/admissions/admission-selector";
import CustomButton from "../../components/StyledComponents/CustomButton";
import {Overlay} from "react-native-elements";
import AdmissionAddOverlay from "../../components/AdmissionCard/AdmissionAddOverlay";
import TopBar from "../../components/TopBar/TopBar";

export default function Detailscreen({navigation, route}) {
    const [visibleAdd, setVisibleAdd] = useState(false);

    const toggleOverlayAdd = () => {
        setVisibleAdd(!visibleAdd);
    };

    const buildingId = route.params.id;
    const [activeLevel, setActiveLevel] = useState({});
    const levels = useSelector(listLevelBuilding(buildingId));
    const admissions = useSelector(listAdmissionsLevel(buildingId,activeLevel&&activeLevel.id));


    useEffect(
        ()=> {
            setActiveLevel(levels[0]);
        },[buildingId]
    )

    function handleLevelChange(id){
        setActiveLevel(levels.find(level => (level.id === id)));
    }

    return (
        <Container>
            <TopBar nav={true} navigation={navigation}/>
            <AddButton><CustomButton function={toggleOverlayAdd} text="+"/></AddButton>
            <Overlay isVisible={visibleAdd} onBackdropPress={toggleOverlayAdd}>
                <AdmissionAddOverlay onClose={()=>setVisibleAdd(false)} levelId={activeLevel.id} buildingId={buildingId}/>
            </Overlay>
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
                {admissions && admissions.map((item) => (
                    <AdmissionCard
                        key={item.id}
                        admission={item}/>
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
max-height: 10%;
`

const AddButton = styled.TouchableOpacity`
  position: absolute;
  bottom:10%;
  right:5px;
  z-index: 100;
`