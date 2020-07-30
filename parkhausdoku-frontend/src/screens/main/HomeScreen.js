import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listAllBuildings} from "../../redux/buildings/building-selector";
import {LOAD_BUILDINGS} from "../../redux/utils/building-utils";
import Container from "../../components/StyledComponents/Container";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";

export default function HomeScreen() {
    const dispatch = useDispatch();
    const buildings = useSelector(listAllBuildings)
    const ownerId="ownerId";
    useEffect(() => {
        dispatch({
            type: LOAD_BUILDINGS,
            payload:{ownerId:ownerId}})
    }, [])

    return (
        <Container>
            {buildings && buildings.map((item)=>(
                <AdmissionCard key={item.id} information={item.id} id={item.id}/>
            ))}

        </Container>
    );
}