import React from 'react';
import { AiOutlineShoppingCart , AiOutlineUser } from 'react-icons/ai';

const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ChingaWhat!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item product-icon">
                                <AiOutlineShoppingCart/>
                            </li>
                            <div class="btn-group">
                                <li type="button" className="nav-item product-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                   <AiOutlineUser/>
                                </li>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#">Agregar producto</a></li>
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