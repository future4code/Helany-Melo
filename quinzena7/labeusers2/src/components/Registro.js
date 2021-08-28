import React from "react";
import axios from "axios";

export default class Registro extends React.Component{
    state = {
        nome:"",
        email:""
    }

    handleNome = (e) =>{
        this.setState({nome:e.target.value})
    }

    handleEmail = (e) =>{
        this.setState({email:e.target.value})
    }

    fazerCadastro = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        const body = {
            name: this.state.nome,
            email: this.state.email
        }
        axios.post(url, body,{
            headers:{
                Authorization:"helany-melo-johnson"
            }
        })
        .then((res)=>{
            alert("Usuário cadastrado com sucesso!")
            this.setState({nome:"", email:""})

        })

        .catch((err)=>{
            alert(err.response.data.message)

        })

    }



    render (){
        return(
            <div>
                <button onClick ={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h3>REGISTRO DE USUÁRIOS</h3>
                <input 
                placeholder={"NOME"}
                value= {this.state.nome}
                onChange={this.handleNome}

                />

                <input placeholder={"E-MAIL"}
                value= {this.state.email}
                onChange={this.handleEmail}


                />

                <button onClick ={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }

}