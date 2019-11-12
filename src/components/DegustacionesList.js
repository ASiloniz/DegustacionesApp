import React from 'react';
import Degustacion from './Degustacion';
import { getDegustaciones } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import {NavLink} from "react-router-dom";
import HeaderUser from './HeaderUser';


export default class DegustacionesList extends React.Component {
    state = {
        degustaciones: [],
        searchedDegustaciones: [],
        refreshCounter: 0
    }

    componentDidMount() {
        getDegustaciones().then((degustaciones) => {
            this.setState({ degustaciones });
        });
    }

    addDegustacionOnClick = () => {
        this.props.history.push({
            pathname: '/addDegustacion'
        });
    };

    render() {
        const degustaciones =  this.state.degustaciones;
        
        const degustacionesList = degustaciones.degustaciones;
        console.log(degustacionesList);

        return (
            <div>
                <HeaderUser userData={this.props.location.userData} token={this.props.location.token} />
                <div className="container">
                    <h3 className="card-title">Degustaciones</h3>
                    <button className="btn btn-outline-success" onClick={this.addDegustacionOnClick}>Añadir Degustación</button>
                    <div className='row'>
                        {degustacionesList &&
                            degustacionesList.map((degustacion, index) => (
                                <Degustacion degustacion={degustacion} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>

        );
    }
}
