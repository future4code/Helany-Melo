import React from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { useProtectedPage } from "../hooks/useProtectedPage";



export default function CreateTripPage(){
    const history = useHistory();
    useProtectedPage();
    const initialForm ={
        name:"",
        planet:"",
        date:"",
        description:"",
        durationInDays:""

    }

    const CreateTripPage =()=>{
        const [form, onChangeForm, resetForm]= useForm(initialForm);

        const create =()=>{
            const body = form;
            const token = window.localStorage.getItem("token");

            axios
                .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/helany-melo/trips",
                body,
                {
                    headers:{
                        auth:token,
                    },
                }
            )
            .then((alert)=>{
                alert("formulário enviado com sucesso")
                history.push("/admin");
            })
            .catch((err)=>{
                alert("Tente novamente!")
            })
        }
    }
}
