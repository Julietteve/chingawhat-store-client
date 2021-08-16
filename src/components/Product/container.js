import React from 'react';
import { ProductCard } from '..';

const ProductContainer = ({products}) => {
    return (
        <div className="product-box">
            <div className="container">
                <div className="row">
                        {
                            products.map((product) => (
                                <ProductCard
                                    name={product.name}
                                    thumbnail={product.thumbnail}
                                    description={product.description}
                                    price = {product.price}
                                    stock= {product.stock}
                                    >
                            </ProductCard>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default ProductContainer;