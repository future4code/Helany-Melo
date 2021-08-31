import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
    margin:16px;
    border: 1px solid orange;
    

`

const ProfilePicture = styled.img`
    width:100%;
`

const ProfileInfo = styled.div`
    padding: 0 16px;

`

function ProfileCard (){
    return (
        <ProfileCardContainer>
        <ProfilePicture src={'https://picsum.photos/300/400'}/>
        <ProfileInfo>Nome, 20</ProfileInfo>
        <ProfileInfo>Descrição da Pessoa</ProfileInfo>
        </ProfileCardContainer>
    )
}

export default ProfileCard;