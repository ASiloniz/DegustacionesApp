import React from 'react';
import Product from './Product';
import { getProducts } from '../repository';
import { Link } from 'react-router-dom';
import SearchField from 'react-search-field';


export default class ProductList extends React.Component {
    state = {
        products: [],
        searchedProducts: []
    }

    componentDidMount() {
        getProducts().then((products) => {
            this.setState({ products });
        });
    }

    handleSearchClick = (value) => {

        const valueSearched = value.toLowerCase();
        console.log(!!value);
        if (!!value) {
            console.log("Hello!");
            let foundProducts = this.state.products.filter(v => (v.name.toLowerCase().includes(valueSearched) || v.description.toLowerCase().includes(valueSearched)));
            console.log(foundProducts);
            this.setState(({searchedProducts: foundProducts}));
        } else {
            this.setState((prevState) => {
                return (
                    {searchedProducts: prevState.products }
                );
            });
        }
    }

    render() {
        const { products, searchedProducts } =  this.state;
        console.log(searchedProducts);
        return (
            <div className=" container">
                <h3 className="card-title">Locales</h3>
                <div style={{ marginBottom: '10px', display: 'flex', justifyContent:'flex-start' }}>
                    <SearchField 
                        placeholder="Search..."
                        onChange={this.handleSearchValue}
                        onSearchClick={this.handleSearchClick}
                        onEnter={this.handleSearchClick}
                        searchText=""
                        classNames="test-class"
                    />
                    <Link to="/cart">
                        <button className="btn btn-success" style={{ marginLeft: '30px' }}>View Cart</button>
                    </Link>
                </div>

                {searchedProducts.length > 0 ? 
                    searchedProducts.map((product, index) => (
                        <Product product={product} key={index} />
                    )) :
                    products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))
                }

            </div>
        );
    }
}
