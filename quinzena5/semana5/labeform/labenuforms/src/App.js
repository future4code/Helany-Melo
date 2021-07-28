

import React from 'react';
import Etapa1 from './components/pages/Etapa1';
import Etapa2 from './components/pages/Etapa2';
import Etapa3 from './components/pages/Etapa3';
import EtapaFinal from './components/pages/EtapaFinal';




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
           <button onClick={this.proximaEtapa}>Proxima etapa</button>
          )}  
          
        </div>
    
    )
    }
      
}

export default App;


