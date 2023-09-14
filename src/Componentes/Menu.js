import React from "react";
import { Link } from "react-router-dom";
import logo from '../imagenes/Logo_La_Cinestacion.png';


export const Menu = () => {
    
    const logoStyles = {
        width: '100px',
        heigth: 'auto'

    };


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
                <img src={logo} alt="Logo" style={logoStyles} />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={"/Libros"} className="nav-link">
                            Peliculas
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Recomendados"} className="nav-link">
                            Recomendados
                        </Link>
                    </li>
                   
                    <li className="nav-item">
                        <Link to={"/Login"} className="nav-link">
                            Iniciar Sesion
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/Register"} className="nav-link">
                            Registrarse
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );

};