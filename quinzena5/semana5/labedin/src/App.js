import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno';
import CardCurso from './CardCuso';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://github.com/helanymelo.png" 
          nome="Helany" 
          descricao="Oi, eu sou a Helany. Sou professora de inglês e estudante de programação. Adoro viajar, comer fora e passear no parque Ibirapuera aos finais de semana."/>
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className ="info">
        <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/561/561127.png"
        
        email="E-mail: helany.f.melo@gmail.com"
        />

        
        <CardPequeno
        imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
        endereco="Endereço: Avenida dos Desenvolvedores"
        />
        </div>



      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://municipais.org.br/wp-content/uploads/2019/11/download.png" 
          nome="Escola de Inglês CNA" 
          descricao="Professora de Inglês." 
        />
        
        <CardGrande 
          imagem="https://www.sindbares.com.br/wp-content/uploads/2020/01/cna-2.jpg" 
          nome="Escola de Inglês CNA"
          descricao="Professora de inglês." 
        />
      </div>

      <div className = "page-section-container">
      <h2>Cursos</h2>
      <CardCurso
       imagem="https://www4.pucsp.br/midias_sociais/opengraph/avatar-opengraph-png24.png"
       nome="Graduação em Letras"
       descricao="Finalizado em 2008"
      />

      <CardCurso
        imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png"
        nome="Curso de Programação Web Frontend"
        descricao="Cursando"
      />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
