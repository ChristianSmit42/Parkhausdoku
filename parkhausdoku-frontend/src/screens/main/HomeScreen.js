import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listAllBuildings} from "../../redux/buildings/building-selector";
import {LOAD_BUILDINGS} from "../../redux/utils/building-utils";
import BuildingCard from "../../components/BuildingCard/BuildingCard";
import styled from 'styled-components/native'
import {ImageBackground} from "react-native";

export default function HomeScreen({navigation}) {
    const dispatch = useDispatch();
    const buildings = useSelector(listAllBuildings)
    const ownerId = "ifsb"; // needs to get owner ID from user
    useEffect(() => {
        dispatch({
            type: LOAD_BUILDINGS,
            payload: {ownerId: ownerId}
        })
    }, [])

    return (
        <ImageBackground source={require('../../resources/bg_bright.png')} style={{width: '100%', height: '100%'}}>
            <Container>
                {buildings && buildings.map((item) => (
                    <BuildingCard key={item.id}
                                  title={item.objectName}
                                  image={item.model}
                                  navigate={() => {
                                      navigation.navigate('Details',item)
                                  }}
                    />
                ))}
            </Container>
        </ImageBackground>
    );
}

const Container = styled.ScrollView`
  flex:1;
  padding-top:20px;
`