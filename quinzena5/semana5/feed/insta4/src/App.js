import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const Input = styled.input`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width:300px;
  padding: 0 0 5px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 15px;


`

const Button = styled.button`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  width:300px;
  text-align: center;
  justify-content: center;
`


class App extends React.Component {
   state = {

    posts:[

  {
    nomeUsuario:'Paulinha',
    fotoUsuario:'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
  },
    
  {
    nomeUsuario:'João',
    fotoUsuario:"https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  
  },

  {
    nomeUsuario:'Amanda',
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
 
  }
    ],

    inputNomeUsuario:"",
    inputFotoUsuario:"",
    InputFotoPost:"",


  };

  onChangeinputNomeUsuario = (e) =>{
    this.setState({inputNomeUsuario:e.target.value})
  };

  onChangeinputFotoUsuario = (e)=>{
    this.setState({inputFotoUsuario:e.target.value})
  };

  onChangeinputFotoPost =(e) =>{
    this.setState({InputFotoPost:e.target.value})
  };

  adicionaNovosPosts = () =>{
    const novosPosts = [...this.state.posts];
    novosPosts.push({
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.InputFotoPost
    });
    this.setState({
      posts:novosPosts,
      nomeUsuario:"",
      fotoUsuario:"",
      fotoPost:""
          
    })
  };

 

  
  listadeComponentes = () => this.state.posts.map((post) =>{

    return(
      <Post
       
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
    />

     postman


   
  })

  render(){
  
    return (
    <div>
    <Input
     value={this.state.inputNomeUsuario}
     onChange={this.onChangeinputNomeUsuario}
     placeholder = "Nome"
    />

    <Input
     value={this.state.inputFotoUsuario}
     onChange={this.onChangeinputFotoUsuario}
     placeholder = "Foto do Usuário"
     /> 

    <Input
     value={this.state.InputFotoPost}
     onChange={this.onChangeinputFotoPost}
     placeholder = "Foto da Postagem"

     />
    
     <Button onClick={this.adicionaNovosPosts}>Adicionar Post</Button>
     <div>{this.listadeComponentes()}</div>

      </div>
      
    );
  }
}
         

export default App;



  