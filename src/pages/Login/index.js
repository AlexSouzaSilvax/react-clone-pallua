import React, { useState } from 'react';
import api from "../../service/api";
import './styles.css';

function App({ history }) {

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [visibleEsqueciSenha, setVisibleEsqueciSenha] = useState(false);

  const [visibleMsg, setVisibleMsg] = useState(false);
  const [textMsg, setTextMsg] = useState('');
  const [typeMsg, setTypeMsg] = useState('danger'); //primary, secondary, success, danger, warning, info, light, dark  

  async function validarAcesso(event) {
    event.preventDefault();

    setVisibleMsg(false);
    setTextMsg('');
    setTypeMsg('danger');

    if (!usuario || !senha) {
      setVisibleMsg(true);
      setTextMsg('Email ou senha inválido');
      setTypeMsg('danger');
      setSenha('');
    } else {
      await api
        .post('/usuarios/buscar', {
          login: usuario,
          senha: senha
        })
        .then(response => {
          setVisibleMsg(true);
          if (response.data) {
            const { status } = response;
            if (status === 200) {
              //setTypeMsg('success');
              //setTextMsg('Usuário validado com sucesso');
              history.push("/principal");
            } else {
              setTypeMsg('danger');
              setTextMsg('Falha ao validar usuário');
            }
          } else {
            setTypeMsg('danger');
            setTextMsg("Usuário não encontrado");
          }
        })
        .catch(error => {
          setTypeMsg('danger');
          setTextMsg('Serviço indisponível');
        });
    }
  }

  function esqueciSenha(event) {
    event.preventDefault();
    setVisibleEsqueciSenha(!visibleEsqueciSenha);
  }

  return (
    <>
      <div class="login-page">
        <img alt="logo" class="logo" src="https://www.pallua.com.br/resources/img/logo-pallua-branco.png" />
        {visibleEsqueciSenha ?
          <div class="form">
            <form class="login-form" onSubmit={validarAcesso}>
              <h2>Esqueci minha senha</h2>
              <br />
              <input type="email" placeholder="email" value={usuario} onChange={event => setUsuario(event.target.value)} />
              <button>Enviar</button>
              <button class="message" onClick={esqueciSenha}>Voltar</button>
            </form>
          </div>
          :
          <div class="form">
            {visibleMsg ?
              <div class={`alert alert-${typeMsg}`} role="alert">
                {textMsg}
              </div>
              : <></>}
            <form class="login-form" onSubmit={validarAcesso}>
              <h2>Portal Administrativo</h2>
              <br />
              <input placeholder="usuario" value={usuario} onChange={event => setUsuario(event.target.value)} />
              <input type="password" placeholder="senha" value={senha} onChange={event => setSenha(event.target.value)} />
              <button class="btn">Entrar</button>
              <button class="message btn" onClick={esqueciSenha}>Esqueci minha senha</button>
            </form>
          </div>
        }
      </div>
    </>
  );
}

export default App;
