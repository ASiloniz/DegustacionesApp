import React from 'react';
import {NavLink} from "react-router-dom";
import { loginUserToApi } from '../repository';

export default class LoginComponent extends React.Component{

    loginUser = (e) => {
        e.preventDefault();
        let user = new FormData(e.target);

        for (var key of user.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }

        loginUserToApi(user);
    };

    render(){
        return(
            <div className="container" style={{height:'100px', alignContent:'center'}}>
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
                            <h3>Sign In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                        <form id='loginForm' onSubmit={this.loginUser} encType='multipart/form-data'>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="email" className="form-control" placeholder="Email" name='email' />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" name='password' />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <p>Don't have an account? <NavLink activeClassName="is-active" to="/register" exact={true}>Sign Up</NavLink>
                                </p>
                            </div>
                            <div className="d-flex justify-content-center">
                                <NavLink activeClassName="is-active" to="/passwordRecovery" exact={true}>Recuperar Contraseña</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}