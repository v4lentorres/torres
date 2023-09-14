import React from 'react';
import './gridlayout.css';
import { useAuth } from '../context/authContext';




const GridLayout = () => {

  const { user, logout, loading } = useAuth()

  const handleLogout = async () => {
    await logout();

  };

  if (loading) return <h1> Loading </h1>

  return (
    <div className="grid-layout">
      <header className="header " >
        <figure class="text-center ">
          <h3>¡Tu sitio de peliculas favorito! Bienvenido {user.email}</h3>
        </figure>
      </header>
      <main className="content">
        <p className=' bg-ligth fs-5'>
          La CineEstacion es tu pasaporte a un mundo de entretenimiento cinematográfico sin límites. Sumérgete en la magia del cine desde la comodidad de tu dispositivo móvil, tableta o televisión inteligente. Con una amplia selección de películas de todos los géneros y épocas, La CineEstacion te ofrece una experiencia cinematográfica incomparable.
        </p>
      </main>
      <aside className="sidebar">
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Querido Diario</div>
              Comedia dramatica
            </div>
            <span className="badge bg-primary rounded-pill">1h 40min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Insidious: La Puerta Roja</div>
              Terror, Fantasia
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Gran Turismo</div>
              Accion, Drama
            </div>
            <span className="badge bg-primary rounded-pill">2h 14min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Blue Beetle</div>
              Aventura, Ciencia Ficcion
            </div>
            <span className="badge bg-primary rounded-pill">2h 08min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Megalodon 2: La fosa</div>
              Suspenso, Accion
            </div>
            <span className="badge bg-primary rounded-pill">1h 56min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">No tengas miedo</div>
              Teeror
            </div>
            <span className="badge bg-primary rounded-pill">1h 28min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Alma Mahler</div>
              Romantico
            </div>
            <span className="badge bg-primary rounded-pill">1h 29min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">La guerra de los Lulus</div>
              Aventura
            </div>
            <span className="badge bg-primary rounded-pill">1h 49min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">El viaje de Harold</div>
              Drama
            </div>
            <span className="badge bg-primary rounded-pill">1h 48min</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Oppenheimer</div>
              Historico, Suspenso
            </div>
            <span className="badge bg-primary rounded-pill">3h 01min</span>
          </li>
        </ol>
      </aside>
      <footer className="footer">
        <button type="button" class="btn btn-danger" onClick={handleLogout}>
          Log Out
        </button>
      </footer>
    </div>
  );
};

export default GridLayout;



