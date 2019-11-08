import React from 'react';
import {NavLink} from "react-router-dom";
import { addUserToApi } from '../repository';

export default class AddDegustacionComponent extends React.Component{
    state = {
        error: undefined
    };

    addDegustacion = (e) => {
        e.preventDefault();
        /*
        let user = {};
        let id = e.target.elements.id.value.trim();
        let nombre = e.target.elements.nombre.value.trim();
        let apellidos = e.target.elements.apellidos.value.trim();
        let dateOfBirth = e.target.elements.dateOfBirth.value.trim();
        let email = e.target.elements.email.value.trim();
        let nacionalidad = e.target.elements.nacionalidad.value.trim();
        let region = e.target.elements.region.value.trim();
        let descripcion = e.target.elements.descripcion.value.trim();
        let fotoDePerfil = e.target.elements.fotoDePerfil.value.trim();
        let password = e.target.elements.password.value.trim();

        user = {
            id,
            nombre,
            apellidos,
            dateOfBirth,
            email,
            nacionalidad,
            region,
            descripcion,
            fotoDePerfil,
            password,
        };

        addUserToApi(user);
        console.log(user);
        */
        
    };

    render(){
        return(
            <div className="card bg-light">
                <article className="card-body mx-auto" style={{maxWidth: '800px'}}>
                    <h4 className="card-title mt-3 text-center">Añadir degustación</h4>
                    <form onSubmit={this.addDegustacion}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <input name="nombre" className="form-control" placeholder="Título" type="text" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <input name="local" className="form-control" placeholder="Local" type="text" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-globe-europe"></i></span>
                            </div>
                            <select className='form-control' name="tipo">
                                <option value="">Tipo de Degustación</option>
                                <option value="afghan">Comida</option>
                                <option value="afghan">Bebida</option>
                            </select>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <input name="pais" className="form-control" placeholder="Pais" type="text" />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                            </div>
                            <input name="region" className="form-control" placeholder="Región" type="text" />
                        </div>
                        <p className='card-text'>Foto de Degustación</p>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="far fa-file-alt"></i> </span>
                            </div>
                            <input className="form-control" type="file" name="fotoDePerfil" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Añadir Degustación</button>
                    </form>
                </article>
            </div>
        );
    }
}