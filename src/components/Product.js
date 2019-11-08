import React from 'react';


export default class Product extends React.Component {
    state = {
        quantity: this.props.product.available_quantity,
        quantityInCart: 0
    };

    getQuantitySelector(){
        let quantityValues = [];
        for (let i = 1; i <= this.state.quantity; i++){
            quantityValues = [...quantityValues, i];
        }

        const selectItems = quantityValues.map((number) =>
            <option value={number} key={number}>
                {number}
            </option>
        );

        return (
            <select className="form-control" ref="quantitySelected" name="quantity" style={{width:'40px'}}>
                {selectItems}
            </select>
        );
    };

    addToCart = () => {
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        const { product } = this.props;

        let inCart = cart.filter(v => v.name === product.name).length;

        const selectedValue = parseInt(this.refs.quantitySelected.value);

        if (!!inCart){
            cart.forEach((cartItem) =>{
                if(cartItem.name === product.name){
                    cartItem.quantityRequired = selectedValue;
                }
            });
        } else{
            let cartAddition = {
                id: product.id,
                name: product.name,
                quantityRequired: selectedValue,
                price: product.price
            };
            cart.push(cartAddition);
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        console.table(cart);
        this.setState({quantityInCart: selectedValue});
    };

    render(){
        const { product } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{product.name} </h4>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <img src={product.img} width='200' style={{margin: '20px'}}/>
                        <p className="card-text" >{product.description}</p>
                    </div>
                    <h5 className="card-text"><small>price: </small>${product.price}</h5>

                    { product.available_quantity > 0 ?
                        <div>
                            <div className="card-text" style={{ display:'flex', justifyContent: 'flex-start' }}>
                                    {this.getQuantitySelector()}
                                    {!!this.state.quantityInCart && <h4 style={{color:'#44D97B', margin: 'auto 30px'}}>In cart:{this.state.quantityInCart}</h4>}
                            </div>
                            
                            <button 
                                className="btn btn-sm btn-warning float-right"
                                onClick={this.addToCart}
                            >
                                Add to cart
                            </button>
                        </div>
                        :
                        <p className="text-danger"> product is out of stock </p>
                    }
                </div>
            </div>
        );
    }
}