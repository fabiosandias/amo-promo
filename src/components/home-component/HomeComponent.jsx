import React from 'react'

export default props => {

    return (
        <React.Fragment>
            <div className="jumbotron">
                <h1 className="display-4">Olá, mundo!</h1>
                <p className="lead">Este é um simples componente jumbotron para chamar mais atenção a um determinado conteúdo ou informação.</p>
                <hr className="my-4"></hr>
                    <p>Ele usa classNamees utilitárias para tipografia e espaçamento de conteúdo, dentro do maior container.</p>
                    <a className="btn btn-primary btn-lg" href="/search" role="button">Fazer contação de seguro</a>
            </div>
        </React.Fragment>
            );
                
            }
