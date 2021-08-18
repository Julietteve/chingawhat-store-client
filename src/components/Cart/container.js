import React from 'react';
import { CartCard } from '..';

const CartContainer = ({products, deleteProduct}) => {
    return (
        <div className="product-box">
            <div className="container">
                <div className="row">
                        {
                            products.map((product) => (
                                <CartCard
                                    name={product.name}
                                    timestamp={product.timestamp}
                                    thumbnail={product.thumbnail}
                                    description={product.description}
                                    price = {product.price}
                                    deleteProduct={()=> deleteProduct(product.id)}
                                    stock={product.stock}
                                    id={product.id}
                                    >
                                </CartCard>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default CartContainer;