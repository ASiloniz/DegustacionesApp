import React from 'react';
import {Link} from "react-router-dom";

const HeaderUser = (props) => {
    console.log(props);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/degustaciones'
                    }}>
                        Degustaciones
                    </Link>
                </li>

                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/editarPerfil'
                    }}>
                        Editar Perfil
                    </Link>
                </li>

                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/galardones'
                    }}>
                        Galardones
                    </Link>
                </li>

                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/addFriend'
                    }}>
                        Añadir Amigo
                    </Link>
                </li>

                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/addLocal'
                    }}>
                        Añadir Local
                    </Link>
                </li>
                <li class="nav-item active" style={{marginRight:'20px'}}>
                    <Link to={{
                        pathname: '/locales'
                    }}>
                        Locales
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderUser;





