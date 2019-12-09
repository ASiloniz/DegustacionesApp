import React from 'react';
import { eliminarLocal } from '../repository';

export default class Local extends React.Component {

    onClickEliminarLocal = (e) => {
        eliminarLocal(this.props.local._id);
        window.location.reload();
    };

    render(){
        const { local } = this.props;
        const { nombre, local:localName, review } = local;

        return (
            <div className='card' style={{width:'100%'}}>
                <h5 className='card-header'>{nombre}</h5>
                <div className='card-body'>
                    <h5 className='card-title'>{localName}</h5>
                    <p className='card-text'>{review}</p>
                    <button className="btn btn-outline-danger" onClick={this.onClickEliminarLocal}>Eliminar Local</button>
                </div>
            </div>
        );
    }
}




                    