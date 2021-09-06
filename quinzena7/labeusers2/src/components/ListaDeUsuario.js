import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
    padding:10px;
    margin:10px;
    width:400px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    text-align: center;
`

export default class ListaDeUsuario extends React.Component{
    state ={
        usuarios:[]
    }

    componentDidMount(){
        this.mostrarUsuarios()
    }
    mostrarUsuarios = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        axios.get(url,{
            headers:{
                Authorization:"helany-melo-johnson"
            }
        })

        .then((res)=>{
            this.setState({usuarios: res.data})

        })

        .catch((err)=>{
            console.log(err.message)
            alert("Ocorreu um erro!")

        })
    }

    deletarUsuario =(id)=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers:{
                Authorization: "helany-melo-johnson"
            }
        })

        .then((res)=>{
            alert("Usuário deletado")
            this.mostrarUsuarios()

        })

        .catch((err)=>{
            
            alert("Ocorreu um erro!")

        })
    }


    
    render (){

        const listaUsuarios = this.state.usuarios.map((user)=>{
            return <CardUsuario 
            key={user.id}>{user.name}
            <button onClick={()=>this.deletarUsuario(user.id)}>Excluir</button>
            
            </CardUsuario>

        })
    
        return(
            <div>
                <button onClick={this.props.irParaRegistro}>Ir para Cadastro</button>
                <h3>Lista de Usuários</h3>
                {listaUsuarios}
                
            </div>
        )
    }

}