import React from 'react';
import '../styles/Sidebar.css'; // Asegúrate de tener este archivo CSS para estilos

const Sidebar = ({ onTrabajoClick }) => {
  // Datos de ejemplo con diferentes tipos de trabajos
  const trabajos = [
    {
      id: 'u1_t1',
      title: '1.1 Trabajo 1',
      tipo: 'pdf',
      rutaArchivo: 'trabajos/xd.pdf',
      descripcion: 'Examen de la primera unidad del curso de Desarrollo Sustentable.'
    }
  ];

  // Organización de trabajos por unidades
  const unidades = {
    'Unidad 1': trabajos.filter(t => t.id.startsWith('u1_')),
    'Unidad 2': trabajos.filter(t => t.id.startsWith('u2_')),
    'Unidad 3': trabajos.filter(t => t.id.startsWith('u3_'))
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>📚 Trabajos</h2>
        <p>Soto Aguirre Jesus Daniel (23560305)</p>
      </div>
      <nav className="sidebar-nav">
        {Object.entries(unidades).map(([unidad, trabajosUnidad]) => (
          <div key={unidad} className="unidad-seccion">
            <h3>{unidad}</h3>
            <ul>
              {trabajosUnidad.map(trabajo => (
                <li key={trabajo.id}>
                  <button
                    className="trabajo-button"
                    onClick={() => onTrabajoClick(trabajo)}
                  >
                    {trabajo.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;