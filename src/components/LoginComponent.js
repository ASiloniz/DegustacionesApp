import React from 'react';
import {NavLink} from "react-router-dom";

export default class LoginComponent extends React.Component{
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
                            <form>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" />
                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Login" className="btn float-right login_btn" />
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