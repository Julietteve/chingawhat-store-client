import React from 'react';
import { AiOutlineDelete,AiOutlineEdit,AiOutlineShoppingCart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

export default function Product ({ name, description, thumbnail , price, stock , idEdit, id, deleteProduct, addToCardProduct }) {
  return (
    <div className="col-3">
      <div className="card m-2">
          <div className="product-options-container">
            <div className="product-options-box">
              <div onClick={()=>deleteProduct(id)}>
                  <AiOutlineDelete/>
              </div>
              <NavLink style={{color:'gray'}} to={`edit-product/${idEdit}`}>
                  <AiOutlineEdit/>
             </NavLink>
              <div onClick={()=>addToCardProduct(id)}>
                  <AiOutlineShoppingCart/>
              </div>
            </div>
          </div>
        <img src={thumbnail} className="card-img-top product-thumbnail" alt={name}/>
          <div className="card-body">
            <h6>{name}</h6>
            <h5 class="card-title">$ {price}</h5>
            <p className="card-text product-description">{description}</p>
          </div>
      </div>
    </div>
  );
}


