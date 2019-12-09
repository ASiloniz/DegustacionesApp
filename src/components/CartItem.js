import React from 'react';
import { eliminarDegustacion, getDegustaciones } from '../repository';



const CartItem = (props) => {
    const item = props.item;
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <h5 className="card-text"><small>price: </small>${item.price}</h5>
                <span className="card-text text-success"><small>Quantity: </small>{item.quantityRequired}</span>
                <button className="btn btn-sm btn-warning float-right" 
                    onClick={(e) => {
                        eliminarDegustacion("5dee4258739d88109915ad70");
                    }}>
                Remove from Cart
                </button>
            </div>
        </div>
    );
};

export default CartItem;