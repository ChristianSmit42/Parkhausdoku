import React, {useEffect} from "react";
import Map from "../../components/Map/Map";
import {ListItem} from "react-native-elements";
import Container from "../../components/StyledComponents/Container";
import Scrollcontainer from "../../components/StyledComponents/Scrollcontainer";
import {useDispatch, useSelector} from "react-redux";
import {listAllAdmissions} from "../../redux/admissions/admission-selector";

export default function Detailscreen() {


    const dispatch = useDispatch();
    const admissions = useSelector(listAllAdmissions)
    useEffect(() => {
        dispatch({type: 'LOAD_ADMISSIONS'})
    }, [])

    return (
        <Container>
            <Map
                url={'https://upload.wikimedia.org/wikipedia/commons/4/44/Logo_The_Simpsons.svg'}
            />
            <Scrollcontainer>
                {admissions && admissions.map((item) => (
                    <ListItem
                        key={item.id}
                        title={item.information}
                        bottomDivider
                    />
                ))}
            </Scrollcontainer>
        </Container>

    )
}