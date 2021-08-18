import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    padding:10px;
    margin:10px;
    width:400px;
`

export default class ListaDeUsuario extends React.Component{
    state ={
        usuarios:[]
    }

    componentDidMount(){
        this.renderizarUsuario()
    }
    renderizarUsuario = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        axios.get(url,{
            header:{
                Authorization:"helany-melo-johnson"
            }
        })

        .then((res)=>{
            this.setState({usuarios: res.data})

        })

        .catch((err)=>{
            // alert("Ocorreu um erro!")

        })
    }

    render (){

        const listaUsuario = (this.state.usuarios.map((user)=>{
            return <CardUsuario>{user.name}</CardUsuario>

        }))
        return(
            <div>
                <button onClick={this.props.irParaRegistro}>Ir para Cadastro</button>
                <h3>Lista de Usuários</h3>
                {listaUsuario}
            </div>
        )
    }

}