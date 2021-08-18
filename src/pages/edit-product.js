import React,{useState, useEffect} from 'react';
import { Menu } from '../components';
import { genericFetch } from '../utils/serverCall';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    
    let { id } = useParams();
   
    const [newItem, setNewItem] = useState({
        name: "",
	    description: "",
	    code: "",
	    thumbnail: "",
	    price: "",
	    stock: ""
    })

    const [newItemPlaceHolder, setNewItemPlaceholder] = useState({
        name: "",
	    description: "",
	    code: "",
	    thumbnail: "",
	    price: "",
	    stock: ""
    })

    const notify = (msg) => toast.success(msg);

    const getProductoById = async () =>{
        const response = await genericFetch('GET', `productos/${id}`)
        setNewItemPlaceholder({
            name: response.data[0].name,
            description:response.data[0].description,
            code: response.data[0].code,
            thumbnail: response.data[0].thumbnail,
            price: response.data[0].price,
            stock: response.data[0].stock
        })
    }

    const handleEditProduct = async () => {
        try{
            const response = await genericFetch('PUT', `productos/${id}`, newItem)
            console.log(newItem)
            console.log(response)
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

    useEffect(()=>{
        getProductoById()
    },[])


    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center m-5">
                    <div className="col-6">
                    <p class="fs-2"> Editar producto </p>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Nombre</label>
                            <input placeholder={newItemPlaceHolder.name} value={newItem.name}  type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, name: e.target.value}))} required/>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Código</label>
                                <input placeholder={newItemPlaceHolder.code} value={newItem.code} type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, code: e.target.value}))} required/>
                            </div>
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Precio</label>
                                <input placeholder={newItemPlaceHolder.price} value={newItem.price}  type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, price: e.target.value}))}  required/>
                            </div>
                            <div className="col-4">
                                <label for="exampleInputPassword1" className="form-label">Stock</label>
                                <input placeholder={newItemPlaceHolder.stock} value={newItem.stock}  type="number" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, stock: e.target.value}))}  required/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Foto</label>
                            <input placeholder={newItemPlaceHolder.thumbnail} value={newItem.thumbnail} type="text" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, thumbnail: e.target.value}))}  required/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Descripción</label>
                            <input placeholder={newItemPlaceHolder.description} value={newItem.description} type="text" className="form-control" onChange={(e)=> setNewItem((prevState)=>({ ...prevState, description: e.target.value}))} required />
                        </div>
                        <button onClick ={handleEditProduct} type="submit" className="btn btn-success">Editar</button>
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

export default EditProduct;