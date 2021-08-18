import React, {useEffect, useState} from 'react';
import { Menu } from '../components';
import { genericFetch } from '../utils/serverCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewProduct = () => {

    const [newItem, setNewItem] = useState({
        name: "",
	    description: "",
	    code: "",
	    thumbnail: "",
	    price: "",
	    stock: ""
    })

    const notify = (msg) => toast.success(msg);

    const handleAddProduct = async () => {
        try{
            const response = await genericFetch('POST', `productos`, newItem)
            notify(response.msg)
            setNewItem({
                name: "",
	            description: "",
	            code: "",
	            thumbnail: "",
	            price: "",
	            stock: ""
            })
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center m-5">
                    <div className="col-6">
                    <p class="fs-2">Agregar producto nuevo</p>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input value={newItem.name}  type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, name: e.target.value}))} required/>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Código</label>
                                <input value={newItem.code} type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, code: e.target.value}))} required/>
                            </div>
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Precio</label>
                                <input value={newItem.price}  type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, price: e.target.value}))}  required/>
                            </div>
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Stock</label>
                                <input value={newItem.stock}  type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, stock: e.target.value}))}  required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Foto</label>
                            <input value={newItem.thumbnail} type="text" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, thumbnail: e.target.value}))}  required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Descripción</label>
                            <input value={newItem.description} type="text" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, description: e.target.value}))} required />
                        </div>
                        <button onClick ={handleAddProduct} type="submit" className="btn btn-success">Agregar</button>
                    </div>
                </div>
            </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
        </div>
    );
};

export default NewProduct;