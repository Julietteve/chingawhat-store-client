import React, {useState, useEffect} from 'react';
import { Menu, CartContainer, Modal } from '../components';
import { genericFetch } from '../utils/serverCall';


const Cart = () => {

    const [products, setProducts] = useState([])
    const [isOpen, setOpenModal] = useState(false)
    const [deleted, setIsDeleted] = useState(false)
    const [idDelete, setIdDelete] = useState(null)
    const [deleteMessage, setDeleteMessage] = useState('')

    const getidDelete = (id) => setIdDelete(id)

    const getProducts = async () => {
        const response = await genericFetch('GET', 'carrito')

        setProducts(response)
    }

    const handleDeleteProduct = async () =>{
        try{
          const response = await genericFetch('DELETE', `carrito/${idDelete}`)
          setIsDeleted(true)
          console.log(response)
          setDeleteMessage(response.msg)
        }
        catch (err){
          console.log(err)
        }
      }
    
    
      const handleCloseModal = () => {
        setOpenModal(false)
        setIsDeleted(false)
    }

    useEffect(()=>{
        getProducts()
    })

    return (
        <div>
            <Menu/>
           { products.length === 0 ? 
            <div style={{marginTop:"4rem"}}className="container d-flex justify-content-center">
                <p className="fs-6 gray">Carrito vacio</p>
            </div>
           :
           <CartContainer 
                deleteProduct={(id)=> getidDelete(id) + setOpenModal(true) } 
                products={products}
            />}
            <Modal handleClose={handleCloseModal} show={isOpen}>
        {
          !deleted ? 
          <div>
              <div className="container d-flex justify-content-center">
                <p className="fs-4">¿ Eliminar producto ID #{idDelete} ?</p>
              </div>
                <div className="d-flex flex-row justify-content-center">
                  <button onClick ={handleDeleteProduct} type="button" className="btn btn-outline-success btn-width" >Si</button>
                  <button onClick={handleCloseModal} type="button" class="btn btn-success btn-width">Cancelar</button>
              </div>
          </div>
          :
          <div className="container d-flex justify-content-center align-items-center" style={{height:120}}>
                <p className="fs-5">{deleteMessage}</p>
          </div>
        }
      </Modal>
        </div>
    );
};

export default Cart;