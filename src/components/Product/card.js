import React from 'react';
import {AiOutlineDelete,AiOutlineEdit,AiOutlineShoppingCart} from 'react-icons/ai'

export default function Product ({ name, description, thumbnail , price, stock , id, deleteProduct, editProduct, addToCardProduct }) {
  return (
    <div className="col-3">
      <div className="card m-2">
          <div className="product-options-container">
            <div className="product-options-box">
              <div onClick={()=>deleteProduct(id)}>
                  <AiOutlineDelete/>
              </div>
              <div onClick={()=>editProduct(id)}>
                  <AiOutlineEdit/>
              </div>
              <div onClick={()=>addToCardProduct(id)}>
                  <AiOutlineShoppingCart/>
              </div>
            </div>
          </div>
        <img src={thumbnail} className="card-img-top product-thumbnail" alt={name}/>
          <div className="card-body">
            <h5 class="card-title">$ {price}</h5>
            <p className="card-text product-description">{description}</p>
          </div>
      </div>
    </div>
  );
}


