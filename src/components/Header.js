import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <h1 className="navbar-brand">DesTapaIS</h1>
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink activeClassName="is-active" to="/" exact={true}>Inicio</NavLink>
                        </li>
                        <li className="nav-item" style={{ marginLeft:'30px'}}>
                            <NavLink activeClassName="is-active" to="/cart">TOP Degustaciones</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink activeClassName="is-active" to="/login" exact={true}>Perfil</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink activeClassName="is-active" to="/degustaciones" exact={true}>Degustaciones</NavLink>
                        </li>
                    </ul>
                </div>
            </div>     
            
        </nav>
        
    );
};

export default Header;


