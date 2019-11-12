import React from 'react';
import { eliminarDegustacion, getDegustaciones } from '../repository';

export default class Degustacion extends React.Component {

    onClickEliminarDegustacion = (e) => {
        eliminarDegustacion(this.props.degustacion._id);
    };

    render(){
        const { degustacion } = this.props;
        const { id, img, local, nombre, pais, region, sabor, size, tipo } = degustacion;

        if(img){
            console.log(img);
        }

        return (
            <div className='col-sm-4 col-lg-4'>
                <img src={img} style={{height:'200px', width:'100%'}}/>
                <h5 className="card-title">{nombre}</h5>
                <h7 className="card-title">{local}</h7>
                <div className='row'>
                    <div className='uber-tags text-center' style={{background:'#f6f6f6', padding:'2px'}}>
                        <p className="card-text" >{tipo}</p>
                    </div>
                    <div className='uber-tags text-center' style={{background:'#f6f6f6', padding:'2px'}}>
                        <p className="card-text" >
                        {
                            sabor.charAt(0).toUpperCase() + sabor.slice(1)
                        }
                        </p>
                    </div>
                    <div className='uber-tags text-center' style={{background:'#f6f6f6', padding:'2px'}}>
                        <p className="card-text" >{size.toUpperCase()}</p>
                    </div>
                    <div className='uber-tags text-center' style={{background:'#f6f6f6', padding:'2px'}}>
                        <p className="card-text" >{`${region}, ${pais}`}</p>
                    </div>
                </div>
                <button onClick={this.onClickEliminarDegustacion}>Eliminar Degustación</button>
            </div>

        );
    }
}




                    