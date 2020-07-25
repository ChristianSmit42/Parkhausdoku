import React, {useEffect} from "react";
import {SafeAreaView} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ListItem} from "react-native-elements";
import {listAllAdmissions} from "../../redux/admissions/admission-selector";

export function HomeScreen() {
    const dispatch = useDispatch();
    const admissions = useSelector(listAllAdmissions)
    useEffect(() => {
        dispatch({type: 'LOAD_ADMISSIONS'})
    }, [])

    return <SafeAreaView>
        {admissions && admissions.map((item) => (
            <ListItem
                key={item.id}
                title={'fdsfgdgsg'}
                bottomDivider
                chevron
            />
        ))}
    </SafeAreaView>
}