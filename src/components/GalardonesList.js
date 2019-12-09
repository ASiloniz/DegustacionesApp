import React from 'react';
import Degustacion from './Degustacion';
import GalardonComponent from './GalardonComponent';
import { getDegustaciones } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import {NavLink} from "react-router-dom";
import HeaderUser from './HeaderUser';


function Galardon(props) {
    const { degustaciones: degustacionesList } = props;

    if(degustacionesList){
        const bebida = degustacionesList.filter(v => v.tipo === 'Bebida');
        if(degustacionesList.length <= 3){
            return(
                <div className="row">
                    <div className='col-sm-5 col-md-5 col-lg-3'>
                        <img src={'http://localhost:5000/uploads/destapaisjunior.png'} style={{height:'60%', width:'80%', marginBottom:'5px', marginTop: '10px'}}/>
                        <h5 className="card-title">DesTapaIs Junior</h5>
                        <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>¡Has añadido al menos 3 degustaciones!</p>
                    </div>
                    {bebida && 
                        <div className='col-sm-5 col-md-5 col-lg-3'>
                            <img src={'http://localhost:5000/uploads/destapaisdrinkeraward.png'} style={{height:'60%', width:'80%', marginBottom:'5px', marginTop: '10px'}}/>
                            <h5 className="card-title">DesTapaIs Drinker</h5>
                            <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>¡Has añadido tu primera bebida!</p>
                        </div>
                    }
                </div>
            );
        }
        else{
            return(
                <div className="row">
                    <div className='col-sm-5 col-md-5 col-lg-3'>
                        <img src={'http://localhost:5000/uploads/destapaisjunior.png'} style={{height:'60%', width:'80%', marginBottom:'5px', marginTop: '10px'}}/>
                        <h5 className="card-title">DesTapaIs Junior</h5>
                        <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>¡Has añadido al menos 3 degustaciones!</p>
                    </div>
                    <div className='col-sm-5 col-md-5 col-lg-3'>
                        <img src={'http://localhost:5000/uploads/destapaissenior.png'} style={{height:'60%', width:'80%', marginBottom:'5px', marginTop: '10px'}}/>
                        <h5 className="card-title">DesTapaIs Senior</h5>
                        <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>¡Has añadido al menos 4 degustaciones!</p>
                    </div>
                    {bebida && 
                        <div className='col-sm-5 col-md-5 col-lg-3'>
                            <img src={'http://localhost:5000/uploads/destapaisdrinker.png'} style={{height:'60%', width:'80%', marginBottom:'5px', marginTop: '10px'}}/>
                            <h5 className="card-title">DesTapaIs Drinker!</h5>
                            <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>¡Has añadido tu primera bebida!</p>
                        </div>
                    }
                </div>
            );
        }
    }
    return(
        <div>Loading...</div>
    );

}

export default class GalardonesList extends React.Component {
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
    render() {
        const degustaciones =  this.state.degustaciones;
        const degustacionesList = degustaciones.degustaciones;
        
        return (
            <div>
                <HeaderUser userData={this.props.location.userData} token={this.props.location.token} />
                <div className="container">
                    <h3 className="card-title">Galardones</h3>
                    
                    {degustacionesList &&
                        <Galardon degustaciones={degustacionesList} />
                    }
                    
                </div>
            </div>

        );
    }
}
