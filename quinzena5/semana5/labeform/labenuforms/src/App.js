import React from 'react';
import Etapa1 from './components/pages/Etapa1';
import Etapa2 from './components/pages/Etapa2';
import Etapa3 from './components/pages/Etapa3';
import EtapaFinal from './components/pages/EtapaFinal';
import styled from 'styled-components';


const Botao = styled.div`
  display:flex;
  margin:14px auto;
  justify-content: center;
  align-items: center;


`
  




class App extends React.Component {
  state = {
    etapa: 1

  }
  renderizaEtapas = () => {
    switch (this.state.etapa) {
        case 1:
          return <Etapa1/>
        case 2:
          return <Etapa2/>
        case 3:
          return <Etapa3/>
        case 4: 
          return <EtapaFinal/>
        default:
          return <EtapaFinal/>  
        
      }
    };

    proximaEtapa = () => {
      this.setState({ etapa: this.state.etapa +1})
    }



    render () {
      return (
        <div>
          {this.renderizaEtapas()}
          {this.state.etapa !== 4 && (
            <Botao>
           <button onClick={this.proximaEtapa}>Proxima etapa</button>
           </Botao>
          )}  
          
        </div>
    
    );
    }
      
}

export default App;


