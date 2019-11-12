import React from 'react';
import { eliminarDegustacion, getDegustaciones } from '../repository';

export default class Degustacion extends React.Component {

    onClickEliminarDegustacion = (e) => {
        eliminarDegustacion(this.props.degustacion._id);
        window.location.reload();
    };

    onClickEnviarEvaluación = (e) => {
        window.location.reload();
    };

    render(){
        const { degustacion } = this.props;
        const { id, img, local, nombre, pais, region, sabor, size, tipo } = degustacion;

        if(img){
            console.log(img);
        }

        return (
            <div className='col-sm-5 col-md-5 col-lg-4'>
                <img src={img} style={{height:'200px', width:'100%', marginBottom:'5px', marginTop: '10px'}}/>
                <h5 className="card-title">{nombre}</h5>
                <p className="card-title" style={{color:'#989898', fontSize: '19px'}}>{local}</p>
                <div className='row'>
                    <div className='col-sm-3 col-lg-3'>
                        <div className='uber-tags text-center' style={{padding:'2px'}}>
                            <p className="card-text" ><i class="fas fa-quote-right"></i>{tipo}</p>
                        </div>
                    </div>
                    <div className='col-sm-3 col-lg-3'>
                        <div className='uber-tags text-center' style={{padding:'2px'}}>
                        <p className="card-text" >
                            <i class="fas fa-grin-tongue-wink"></i>{sabor.charAt(0).toUpperCase() + sabor.slice(1)}
                        </p>
                        </div>
                    </div>
                    <div className='col-sm-3 col-lg-3'>
                        <div className='uber-tags text-center' style={{padding:'2px'}}>
                            <p className="card-text" ><i class="fas fa-ruler"></i>{size}</p>
                        </div>
                    </div>
                    <div className='col-sm-3 col-lg-3'>
                        <div className='uber-tags text-center' style={{padding:'2px'}}>
                            <p className="card-text" ><i class="fas fa-location-arrow"></i> {`${region}, ${pais} `}</p>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect2">Evaluación:</label>
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Comentario</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-outline-info" onClick={this.onClickEnviarEvaluación}>Enviar evaluación</button>
                <button className="btn btn-outline-danger" onClick={this.onClickEliminarDegustacion}>Eliminar Degustación</button>
            </div>

        );
    }
}




                    