import React from 'react';
import {NavLink} from "react-router-dom";
import { addDegustacion } from '../repository';
import HeaderUser from './HeaderUser';

export default class AddDegustacionComponent extends React.Component{
    state = {
        error: undefined
    };

    addDegustacionForm = (e) => {
        e.preventDefault();
        console.log(e.target);

        let degustacion = new FormData(e.target);
        
        addDegustacion(degustacion);

        this.props.history.push({
            pathname: '/degustaciones'
        });
    
        window.location.reload();
    };

    render(){
        return(
            <div>
                <HeaderUser userData={this.props.location.userData} token={this.props.location.token} />
                <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: '800px'}}>
                        <h4 className="card-title mt-3 text-center">Añadir degustación</h4>
                        <form id='addDegustacionForm' onSubmit={this.addDegustacionForm} encType='multipart/form-data'>
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
                                    <option value="Comida">Comida</option>
                                    <option value="Bebida">Bebida</option>
                                </select>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <select className='form-control' name="size">
                                    <option value="">Tamaño</option>
                                    <option value="Pequeño">Pequeño</option>
                                    <option value="Mediano">Mediano</option>
                                    <option value="Grande">Grande</option>
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

                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                </div>
                                <select className='form-control' name="sabor">
                                    <option value="">Sabor</option>
                                    <option value="Dulce">Dulce</option>
                                    <option value="Amargo">Amargo</option>
                                    <option value="Salado">Salado</option>
                                </select>
                            </div>

                            <p className='card-text'>Foto de Degustación</p>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"> <i className="far fa-file-alt"></i> </span>
                                </div>
                                <input className="form-control" type="file" name="inputFotoDePerfil" />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Añadir Degustación</button>
                        </form>
                    </article>
                </div>
            </div>
        );
    }
}