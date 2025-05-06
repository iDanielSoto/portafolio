import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import './styles/App.css';

function App() {
  const [selectedTrabajo, setSelectedTrabajo] = useState(null);

  const selectTrabajo = (trabajo) => {
    setSelectedTrabajo(trabajo);
  };

  const renderContenido = (trabajo) => {
    if (!trabajo) return null;

    switch (trabajo.tipo) {
      case 'imagen':
        return (
          <div className="trabajo-imagen-container">
            <img
              src={trabajo.url || trabajo.rutaArchivo}
              alt={trabajo.title}
              className="trabajo-imagen"
            />
            {trabajo.descripcion && (
              <p className="imagen-descripcion">{trabajo.descripcion}</p>
            )}
          </div>
        );

      case 'pdf':
        return (
          <div className="trabajo-pdf-container">
            <iframe
              src={trabajo.url || trabajo.rutaArchivo}
              title={trabajo.title}
              className="trabajo-pdf"
              width="100%"
              height="600px"
            />
            {trabajo.descripcion && (
              <p className="pdf-descripcion">{trabajo.descripcion}</p>
            )}
          </div>
        );

      case 'video':
        return (
          <div className="trabajo-video-container">
            <video
              src={trabajo.url || trabajo.rutaArchivo}
              controls
              className="trabajo-video"
              width="100%"
            />
            {trabajo.descripcion && (
              <p className="video-descripcion">{trabajo.descripcion}</p>
            )}
          </div>
        );

      case 'embed':
        return (
          <div className="trabajo-embed-container">
            <iframe
              src={trabajo.url}
              title={trabajo.title}
              className="trabajo-embed"
              width="100%"
              height="600px"
              allowFullScreen
            />
            {trabajo.descripcion && (
              <p className="embed-descripcion">{trabajo.descripcion}</p>
            )}
          </div>
        );

      case 'texto':
      default:
        return (
          <div className="trabajo-content">
            <p>{trabajo.content || trabajo.descripcion}</p>

            {(trabajo.objetivos || trabajo.mostrarEstructuraCompleta) && (
              <div className="trabajo-section">
                <h3>Objetivos</h3>
                <ul>
                  {trabajo.objetivos ? (
                    trabajo.objetivos.map((o, i) => <li key={i}>{o}</li>)
                  ) : (
                    <>
                      <li>Objetivo 1</li>
                      <li>Objetivo 2</li>
                      <li>Objetivo 3</li>
                    </>
                  )}
                </ul>
              </div>
            )}

            {(trabajo.desarrollo || trabajo.mostrarEstructuraCompleta) && (
              <div className="trabajo-section">
                <h3>Desarrollo</h3>
                <p>
                  {trabajo.desarrollo ||
                    'Texto detallado explicando el desarrollo del trabajo.'}
                </p>
              </div>
            )}

            {(trabajo.conclusiones || trabajo.mostrarEstructuraCompleta) && (
              <div className="trabajo-section">
                <h3>Conclusiones</h3>
                <p>
                  {trabajo.conclusiones ||
                    'Las conclusiones principales de este trabajo son...'}
                </p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <Sidebar onTrabajoClick={selectTrabajo} />

      <main className="main-content">
        <header className="main-header">
          <h1>💼 Portafolio de evidencias</h1>
        </header>

        <div className="content-area">
          {!selectedTrabajo ? (
            <div className="welcome-section">

              <div className="bento-card">
                <img src='images/dancard.png' alt="Logo" className="logo-card" />
              </div>

              <div className="bento-card">
                <h2>👩‍🏫 Docente</h2>
                <p>Mtra. (por confirmar)</p>
              </div>

              <div className="bento-card">
                <h2>📌 Objetivo</h2>
                <p>Mostrar evidencias del curso relacionadas con el desarrollo sustentable.</p>
              </div>

              {/* <div className="bento-card" style={{ gridColumn: "1 / -1" }}>
                <img
                  src="https://1.bp.blogspot.com/-GrBkoyQEg7w/XlaijYuzbrI/AAAAAAAAAFo/-NJPtT-As5Eqacs5W--GrGedWvQPn2tuQCLcBGAsYHQ/s1600/bienvenidos.png"
                  alt="Bienvenida"
                  className="bento-image"
                />
              </div> */}
            </div>
          ) : (
            <div className="trabajo-detalle">
              <h2>{selectedTrabajo.title}</h2>
              {renderContenido(selectedTrabajo)}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
