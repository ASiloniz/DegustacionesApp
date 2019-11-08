import React from 'react';
import {NavLink} from "react-router-dom";

export default class ForgetPassComponent extends React.Component{
    state = {
        peticionRealizada: false
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ peticionRealizada: true });
    }

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
                            <h3>Recuperar Contraseña</h3>
                        </div>
                        <div className="card-body">
                            {
                                (!this.state.peticionRealizada) ? (
                                    <form onSubmit={this.onSubmit}>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-envelope-square"></i></span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Introducir email de recuperación" required />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block">Recuperar Contraseña</button>
                                    </form>
                                ) : (
                                    <div>
                                        <p>Consulta tu email y sigue los pasos!</p>
                                        <NavLink activeClassName="is-active" to="/login" exact={true}>Iniciar Sesión</NavLink>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}