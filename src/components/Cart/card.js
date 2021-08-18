import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai'

const CartCard = ({name, thumbnail, description, price, timestamp, stock,id, deleteProduct}) => {
    return (
        <div>
            <div className="card-cart-container">
                <div className="card-cart-img">
                    <img  src ={thumbnail} className="img-fluid"></img>
                </div>
                <div className="card-cart-detail">
                    <div className="row">
                        <div className="col-6 justify-content-start">
                            <p class="fs-4">{name}</p>
                        </div>
                        <div onClick={()=>deleteProduct(id)} className="col-6 justify-content-end product-options-box">
                                <AiOutlineDelete/>
                        </div>
                    </div>
                    <p className="fs-5">{description}</p>
                    <div className="row">
                        <div className="col-4">
                            <p className="fs-6 gray">$ {price}</p>
                        </div>
                        <div className="col-4">
                            <p className="fs-6 gray">{stock} disponibles</p>
                        </div>
                        <div className="col-4">
                            <p className="fs-6 gray"> Agregado el {timestamp.split('T')[0]}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default CartCard;