import React from 'react';
import {NavLink} from "react-router-dom";
import { addDegustacion, addLocal} from '../repository';
import HeaderUser from './HeaderUser';

export default class AddLocalComponent extends React.Component{
    state = {
        error: undefined
    };

    addLocalForm = (e) => {
        e.preventDefault();
        console.log(e.target);

        let local = new FormData(e.target);
        
        addLocal(local);

        
        this.props.history.push({
            pathname: '/locales'
        });
        
        window.location.reload();
    };

    render(){
        return(
            <div>
                <HeaderUser userData={this.props.location.userData} token={this.props.location.token} />
                <div className="card bg-light">
                    <article className="card-body container">
                        <h4 className="card-title mt-3 text-center">Añadir Local</h4>
                        <form id='addDegustacionForm' onSubmit={this.addLocalForm} encType='multipart/form-data'>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <input name="nombre" className="form-control" placeholder="Nombre del local" type="text" required />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-globe-europe"></i> </span>
                                </div>
                                <input name="local" className="form-control" placeholder="Localización" type="text" required />
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-file-alt"></i> </span>
                                </div>
                                <textarea name="review" className="form-control" placeholder="Escribe una reseña al local" type="text" rows="7" required />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Añadir Local</button>
                        </form>
                    </article>
                </div>
            </div>

        );
    }
}