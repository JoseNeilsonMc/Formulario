import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
        <header className="header">
      <div className="logo">
        <FontAwesomeIcon />
        SeuLogoAqui
      </div>
      <nav className="nav">
        <a href="#contato">
          <FontAwesomeIcon icon={faEnvelope} />
          Contato
        </a>
        <a href="#sobre">
          Sobre
          <span> - Informações sobre a empresa ou pessoa</span>
        </a>
        <a href="#curriculo">
          <FontAwesomeIcon icon={faUser} />
          Currículo
        </a>
        <a href="#projetos">
          <FontAwesomeIcon icon={faProjectDiagram} />
          Projetos
        </a>
      </nav>
    </header>
    </div>
  )
}
