import React from 'react';
import { ProductCard } from '..';

const ProductContainer = ({products, deleteProduct, addToCardProduct, editProduct}) => {
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
                                deleteProduct={()=> deleteProduct(product.id)}
                                addToCardProduct={()=> addToCardProduct(product.id)}
                                idEdit={product.id}
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