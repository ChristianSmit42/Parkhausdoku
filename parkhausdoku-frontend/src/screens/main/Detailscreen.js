import React, {useEffect} from "react";
import Map from "../../components/Map/Map";
import Container from "../../components/StyledComponents/Container";
import Scrollcontainer from "../../components/StyledComponents/Scrollcontainer";
import {useDispatch, useSelector} from "react-redux";
import {listAllAdmissions} from "../../redux/admissions/admission-selector";
import {LOAD_ADMISSIONS} from "../../redux/utils/admission-utils";
import AdmissionCard from "../../components/AdmissionCard/AdmissionCard";
import {serverUrl} from "../../redux/redux-config";

//'https://upload.wikimedia.org/wikipedia/commons/4/44/Logo_The_Simpsons.svg'

export default function Detailscreen() {


    const dispatch = useDispatch();
    const admissions = useSelector(listAllAdmissions)
    useEffect(() => {
        dispatch({type: LOAD_ADMISSIONS})
    }, [])

    return (
        <Container>
            <Map
                url={`${serverUrl}/ug2_plan_redu.svg`}
            />

            <Scrollcontainer>
                {admissions && admissions.map((item) => (
                    <AdmissionCard key={item.id} information={item.information} id={item.id}/>
                ))}
            </Scrollcontainer>
        </Container>

    )
}