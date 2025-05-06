import React from 'react';
import '../styles/TrabajoSidebar.css';

const TrabajoSidebar = ({ isOpen, onClose, trabajo }) => {
  return (
    <>
      {/* Overlay para cerrar el sidebar al hacer clic fuera */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      {/* Sidebar que se desliza desde la derecha */}
      <div className={`trabajo-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>{trabajo?.title || 'Detalles del Trabajo'}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="sidebar-content">
          {trabajo && (
            <div className="trabajo-content">
              <p>{trabajo.content}</p>

              <div className="trabajo-section">
                <h3>Objetivos</h3>
                <ul>
                  <li>Objetivo 1</li>
                  <li>Objetivo 2</li>
                  <li>Objetivo 3</li>
                </ul>
              </div>

              <div className="trabajo-section">
                <h3>Desarrollo</h3>
                <p>
                  Texto detallado explicando el desarrollo del trabajo.
                  Aquí puedes incluir imágenes, gráficos, código, etc.
                </p>
              </div>

              <div className="trabajo-section">
                <h3>Conclusiones</h3>
                <p>
                  Las conclusiones principales de este trabajo son...
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TrabajoSidebar;