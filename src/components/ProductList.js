import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import { storeProducts } from '../Data';
import { ProductConsumer } from '../Context';

class ProductList extends Component {
    state = { 
        products: storeProducts
    }

    
    render() {  
        return ( 
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(st => {
                                        return <Product key={st.id} st={st} 
                                        />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProductList;