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

                <li class="nav-item active">
                    <Link to={{
                        pathname: '/galardones'
                    }}>
                        Galardones
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default HeaderUser;





