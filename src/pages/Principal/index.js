import React from 'react';
import './styles.css';

function App({ history }) {

  return (
    <>
      <nav class="navbar">
        <img alt="logo" class="logo" src="https://www.pallua.com.br/resources/img/logo-pallua-branco.png" />
      </nav>

      <div class="principal-page">

        <div class="container-fluid">

          <div class="row">

            <div class="col col-lg-2 bg-primary">


            </div>

            <div class="col bg-secondary">
              
              <div class="row">

                

                <div>
                  <h2>Olá Mundo!</h2>
                  <h2>Má oeee</h2>
                  <h2>Quem quer dinheiro ?</h2>
                </div>

              </div>

            </div>

            <div class="col col-lg-2 bg-danger">
              <h1>Terceiro</h1>
            </div>

          </div>
        </div>
      </div>
      <br />

    </>
  );
}

export default App;
