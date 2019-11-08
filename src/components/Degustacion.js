import React from 'react';

export default class Degustacion extends React.Component {

    render(){
        const { degustacion } = this.props;
        const { id, img, local, nombre, pais, region, sabor, size, tipo } = degustacion;
        return (
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <h4 className="card-title">{nombre}</h4>
                        <h5 className="card-title">{local}</h5>
                    </div>
                    <div className='row'>
                        <img src={img} width='200' style={{margin: '20px'}}/>
                    </div>
                    <div className='row'>
                        <div className='col-sm-3 col-lg-3'>
                            <p className="card-text" >{tipo}</p>
                        </div>
                        <div className='col-sm-3 col-lg-3'>

                            <p className="card-text" >
                            {
                                sabor.charAt(0).toUpperCase() + sabor.slice(1)
                            }</p>
                        </div>
                        <div className='col-sm-3 col-lg-3'>
                            <p className="card-text" >Tamaño: {size.toUpperCase()}</p>
                        </div>
                        <div className='col-sm-3 col-lg-3'>
                            <p className="card-text" >{`${region}, ${pais}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




                    