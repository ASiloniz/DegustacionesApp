import React from 'react';
import Degustacion from './Degustacion';
import { getDegustaciones } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import {NavLink} from "react-router-dom";


export default class DegustacionesList extends React.Component {
    state = {
        degustaciones: [],
        searchedDegustaciones: []
    }

    componentDidMount() {
        getDegustaciones().then((degustaciones) => {
            this.setState({ degustaciones });
        });
    }


    render() {
        const { degustaciones } =  this.state;
        console.log(degustaciones);

        return (
            <div className=" container">
                <h3 className="card-title">Degustaciones</h3>
                <button className='btn btn-outline-primary'>
                    <NavLink activeClassName='' to="/addDegustacion" exact={true}>Añadir Degustación</NavLink>
                </button>
                {
                    degustaciones.map((degustacion, index) => (
                        <Degustacion degustacion={degustacion} key={index} />
                    ))
                }
            </div>
        );
    }
}
