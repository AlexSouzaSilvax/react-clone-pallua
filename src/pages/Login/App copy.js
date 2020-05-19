import React, { useState } from 'react';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [visibleEsqueciSenha, setVisibleEsqueciSenha] = useState(false);

  function validarAcesso(event) {
    event.preventDefault();
    if (!email || !senha) {
      alert('Email ou senha inválidos');
    } else {

    }

  }

  function esqueciSenha(event) {
    event.preventDefault();
    setVisibleEsqueciSenha(!visibleEsqueciSenha);
  }

  return (
    <>
      <nav class="navbar ">
        <img alt="logo" class="logo" src="https://www.pallua.com.br/resources/img/logo-pallua-branco.png" />
      </nav>
      <div class="login-page">
        {visibleEsqueciSenha ?
          <div class="form">
            <form class="login-form" onSubmit={validarAcesso}>
              <h2>Esqueci minha senha</h2>
              <br />
              <input type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
              <button>Enviar</button>
              <button class="message" onClick={esqueciSenha}>Voltar</button>
            </form>
          </div>
          :
          <div class="form">
            <form class="login-form" onSubmit={validarAcesso}>
              <h2>Portal Administrativo</h2>
              <br />
              <input type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
              <input type="password" placeholder="senha" value={senha} onChange={event => setSenha(event.target.value)} />
              <button>Entrar</button>
              <button class="message" onClick={esqueciSenha}>Esqueci minha senha</button>
            </form>            
          </div>
        }
      </div>
    </>
  );
}

export default App;
