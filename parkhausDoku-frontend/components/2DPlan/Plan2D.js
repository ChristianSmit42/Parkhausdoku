import React from 'react';
import {SvgUri} from "react-native-svg";

export default function Plan2D({url}){
    return (
        <SvgUri
            width="50%"
            height="50%"
            uri={url}
        />
    )
}