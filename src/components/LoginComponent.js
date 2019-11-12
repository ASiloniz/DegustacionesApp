import React from 'react';
import {NavLink} from "react-router-dom";
import { loginUserToApi } from '../repository';

export default class LoginComponent extends React.Component{

    loginUser = (e) => {
        e.preventDefault();
        let user = new FormData(e.target);

        let userJson = {};

        for (var key of user.entries()) {
            userJson[key[0]] = key[1];
            console.log(key[0] + ', ' + key[1]);
        }

        loginUserToApi(user).then((result) => {
            if(result){
                this.props.history.push({
                    pathname: '/degustaciones',
                    state: { userData: result, user: userJson }
                });
            }
        });

    };

    render(){
        return(
            <div className="container" style={{height:'100px', alignContent:'center', marginTop:'40px'}}>
                <div className="d-flex justify-content-center h-100">
                    <div className="card" 
                    style={{
                        height: '370px',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        width: '400px',
                        backgroundColor: 'rgba(0,0,0,0.5) !important'
                    }}>
                        <div className="card-header">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <div className="card-body">
                        <form id='loginForm' onSubmit={this.loginUser} encType='multipart/form-data'>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email" name='email' required />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="Contraseña" name='password' required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                </div>
                                <div className="form-group">
                                    <NavLink activeClassName="is-active" to="/passwordRecovery" exact={true}>Recuperar Contraseña</NavLink>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <p>¿No tienes cuenta?<NavLink activeClassName="is-active" to="/register" exact={true}> Registrarse</NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}