import { ContainerCriaPlaylist, Input } from './styled';

export default function CadastrarPlaylist(props) {
    return (
        <ContainerCriaPlaylist>
            <h1>O que você gostaria de curtir hoje? &#128526;</h1>
            
            <div>
                <input value={props.value} 
                onChange={props.inputPlaylist} 
                placeholder="Nome da Playlist"
                placeholderTextColor="white"/>

                <button onClick={props.cadastrarPlaylist}>Adicionar♫</button>
            </div>
        </ContainerCriaPlaylist>
    )
}