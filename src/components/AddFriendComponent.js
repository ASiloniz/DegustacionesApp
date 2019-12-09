import React from 'react';
import {NavLink} from "react-router-dom";

export default class AddFriendComponent extends React.Component{
    state = {
        enviado: false
    };

    addDegustacionForm = (e) => {
        e.preventDefault();
        this.setState({enviado: !this.state.enviado});
    };

    render(){
        return(
            <div className="card bg-light">
                <article className="card-body container">
                    <h4 className="card-title mt-3 text-center">Añadir amigo</h4>
                    {
                        (!this.state.enviado) ?
                            (
                                <form id='addDegustacionForm' onSubmit={this.addDegustacionForm} encType='multipart/form-data'>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-at"></i> </span>
                                        </div>
                                        <input name="email" className="form-control" placeholder="Email" type="email" required />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                                        </div>
                                        <textarea name="region" className="form-control" placeholder="¡Escribe un mensaje para tu solicitud de amistad!" type="text" rows="5" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Enviar Solicitud</button>
                                </form>
                            ) : (
                                <h4>¡Solicitud enviada!</h4>
                            )
                    }
                </article>
            </div>
        );
    }
}