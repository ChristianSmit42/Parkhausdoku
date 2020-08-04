import React from "react";
import Container from "../../components/StyledComponents/Container";
import {Text} from "react-native";
import styled from 'styled-components/native'
import Map from "../../components/Map/Map";
import {serverUrl} from "../../redux/redux-config";
import Scrollcontainer from "../../components/StyledComponents/Scrollcontainer";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";

export default function Detailscreen({navigation, route}) {

    const levels = route.params.levels;
    const admissions = levels.admissions;
    console.log(levels);

    // const dispatch = useDispatch();
    // const admissions = useSelector(listAllAdmissions)
    // useEffect(() => {
    //     dispatch({type: LOAD_ADMISSIONS})
    // }, [])


    return (
        <Container>
            <LevelContainer horizontal>
                {levels && levels.map((item)=>(
                    <ClickableLevel><Text>{item.id}</Text></ClickableLevel>
                ))}
            </LevelContainer>
            <Map url={`${serverUrl}/ug2_plan.svg`}/>
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