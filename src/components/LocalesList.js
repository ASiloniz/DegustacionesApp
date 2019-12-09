import React from 'react';
import LocalComponent from './LocalComponent';
import { getLocales } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';
import {NavLink} from "react-router-dom";
import HeaderUser from './HeaderUser';


function CargaLocalesList(locales) {
    console.log(locales);

    const { localesList } = locales;

    if(!localesList){
        return(
            <div>
                <h5>Cargando Locales...</h5>
            </div>
        )
    }
    if(localesList && localesList.length === 0){
        return(
            <div>
                <h5>Ningún local añadido</h5>
            </div>
        )
    }
    if(localesList && localesList.length > 0){
        return(
            localesList.map((local, index) => (
                <LocalComponent local={local} key={index} />
            ))
        )
    }
}

export default class LocalesList extends React.Component {
    state = {
        locales: [],
        searchedDegustaciones: [],
        refreshCounter: 0
    }

    componentDidMount() {
        getLocales().then((locales) => {
            this.setState({ locales });
        });
    }

    render() {
        const locales =  this.state.locales;
        
        console.log('LOCALES!');
        console.log(this.state);
        const localesList =  locales.locales;

        return (
            <div>
                <HeaderUser userData={this.props.location.userData} token={this.props.location.token} />
                <div className="container">
                    <h3 className="card-title">Locales</h3>
                    <div className='row'>
                        {localesList &&
                            <CargaLocalesList localesList={localesList} props={this.props} />
                        }
                    </div>
                </div>
            </div>

        );
    }
}
