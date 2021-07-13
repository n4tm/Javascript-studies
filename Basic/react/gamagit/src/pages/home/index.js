import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('')
  const [erro, setErro] = useState(false);
  function handlePesquisa(){axios.get(`https://api.github.com/users/${usuario}/repos`)
  .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
      <S.HomeHeader>GAMAGIT</S.HomeHeader>
      <S.Content>
        <S.Input className="ususarioInput" placeholder="Digite um usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
        <S.GithubLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/900px-Octicons-mark-github.svg.png"></S.GithubLogo>
      </S.Content>
      {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
    </S.HomeContainer>
  );
}

export default App;