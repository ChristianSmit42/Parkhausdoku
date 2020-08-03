import React from "react";
import styled from 'styled-components/native'

export default function Navbar() {

    return <Header style={{
        elevation: 5,
    }}>
        <Title>CON+ SCANTECH</Title>
        <Logo source={require('./resources/branding.jpg')}/>
    </Header>

}

const Header = styled.View`
  height: 6%;
  flex-direction: row;
  overflow: visible;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(0,0,0,1);
  border-bottom-right-radius: 50px;
`

const Logo = styled.Image`
  height: 50px;
  width: 70px;
  border-bottom-left-radius: 20px;
  position:absolute;
  top:0;
  right: 0;
`

const Title = styled.Text`
  height:100%;
  font-size: 30px;
  color: #ffffff;
  margin: auto;
`