import React from "react";
import styled from 'styled-components/native'
import {serverUrl} from "../../redux/redux-config";
import { Dimensions } from 'react-native';


export default function BuildingCard(props){

    return(
        <Container style={{
            elevation: 10,
        }}>
            <Cover>
                <Image source={
                    {uri: `${serverUrl}${props.image}`}
                } />
            </Cover>
            <Content>
                <Title>{props.title}</Title>
            </Content>
        </Container>
    );
}
const windowWidth = Dimensions.get('window').width-65;

const Container = styled.View`
	background: #fff;
	height: 260px;
	width: ${windowWidth};
	border-radius: 14px;
	margin: 20px auto 0 auto;
	justify-content: space-between;
`;

const Cover = styled.View`
	width: 100%;
	height: 200px;
	border-top-left-radius: 14px;
	border-top-right-radius: 14px;
	overflow: hidden;
`;

const Image = styled.Image`
	width: 100%;
	height: 100%;
`;

const Content = styled.View`
	padding-top: 10px;
	flex-direction: column;
	align-items: center;
	height: 60px;
`;

const Title = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;