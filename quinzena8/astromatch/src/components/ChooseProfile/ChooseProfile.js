import axios from "axios";
import React, { useEffect, useState } from "react";
import ChooseButton from "./ChooseButtons";
import ProfileCard from "./ProfileCard";


function ChooseProfile (){
    const [profileToBeChosen, setprofileToBeChosen] = useState(undefined)

    const getProfileToChoose =()=>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helany/person")
        .then(response =>{
            setprofileToBeChosen(response.data.profile)
          })
    }



      const chooseProfile =(choice)=>{
        const body = {
          choice:false,
          id: profileToBeChosen.id
    
        }
        setprofileToBeChosen(undefined)

    
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/helany/choose-person", body).then(response =>{
            console.log(response)
            getProfileToChoose()
            
        })

      }

      useEffect(()=>{
        getProfileToChoose()
      }, []);
    
      const onClickNo =() =>{
        chooseProfile(false)
      }
      const onClickYes =()=>{
        chooseProfile(true)
      }
    
        
         
   
    
    return (
        <div>
        {profileToBeChosen ?
        (<>
        <ProfileCard profile ={profileToBeChosen}/>
        <ChooseButton onClickYes={onClickYes} onClickNo={onClickNo}/>
        </>) : <p>Carregando...</p>
      }
        </div>
    )
}

export default ChooseProfile;