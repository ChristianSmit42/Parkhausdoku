import React, {useEffect} from "react";
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from "react-redux";
import {listAllBuildings} from "../../redux/buildings/building-selector";
import {LOAD_BUILDINGS} from "../../redux/utils/building-utils";
import BuildingCard from "../../components/BuildingCard/BuildingCard";
import styled from 'styled-components/native'

export default function HomeScreen() {
    const dispatch = useDispatch();
    const buildings = useSelector(listAllBuildings)
    const ownerId="ifsb"; // needs to get owner ID from user
    useEffect(() => {
        dispatch({
            type: LOAD_BUILDINGS,
            payload:{ownerId:ownerId}})
    }, [])

    return (
        <Container>
            {buildings && buildings.map((item)=>(
                <BuildingCard key={item.id} title={item.objectName} image={item.model}/>
            ))}

        </Container>
    );
}

const Container = styled.ScrollView`
  flex:1;
  background-color: #ffffff;
`