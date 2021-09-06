import React from "react";
import ListaDeUsuario from "./components/ListaDeUsuario";
import Registro from "./components/Registro";


class App extends React.Component{
  state = {
    telaAtual:"cadastro"
  }

  mostraTela = () =>{
    switch (this.state.telaAtual){
      case "cadastro":
        return <Registro irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaDeUsuario irParaRegistro={this.irParaRegistro}/>
        default:
          return <div>
            ERRO! PÁGINA NÃO ENCONTRADA!!!
          </div>
    } 
  }

  irParaLista = () =>{
    this.setState({telaAtual:"lista"})

  }


  irParaRegistro = () =>{
    this.setState({telaAtual:"cadastro"})

  }

  render (){
    return (
      <div>
        {this.mostraTela()}
        
      </div>


    )
  }
}

export default App;