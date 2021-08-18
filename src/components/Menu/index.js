import React, {useState,useEffect}from 'react';
import {NavLink} from 'react-router-dom';
import { AiOutlineShoppingCart , AiOutlineUser } from 'react-icons/ai';
import { genericFetch } from '../../utils/serverCall';

const Menu = () => {

    const [productsLen, setProductsLen] = useState(0)

    const getProducts = async () => {
        const response = await genericFetch('GET', 'carrito')
        setProductsLen(response[0].products.length)
    }

    useEffect(()=>{
        getProducts()
    })

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>ChingaWhat!</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item product-icon">
                            <NavLink className="navbar-brand" to='/cart'>
                                <AiOutlineShoppingCart/> <span className="fs-6 gray">{productsLen}</span>
                            </NavLink>    
                            </li>
                            <div class="btn-group">
                                <li type="button" className="nav-item product-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                   <AiOutlineUser/>
                                </li>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <NavLink className="dropdown-item" to='/new-product'>
                                         Agregar producto
                                    </NavLink> 
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;