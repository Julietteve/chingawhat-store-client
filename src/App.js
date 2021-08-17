import { useEffect, useState } from 'react';
import { genericFetch } from './utils/serverCall';
import { ProductContainer, Menu , Modal } from './components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  const [products, setProducts] = useState([])
  const [isOpen, setOpenModal] = useState(false)

  const [deleted, setIsDeleted] = useState(false)
  const [idDelete, setIdDelete] = useState(null)
  const [deleteMessage, setDeleteMessage] = useState('')

  const [idEdit, setIdEdit] = useState(null)

  const [idAdd, setIdAdd] = useState(null)
  
  const getidDelete = (id) => setIdDelete(id)
  const getidEdit = (id) => setIdEdit(id)
  const getidAdd = (id) => setIdAdd(id)

  const notify = () => toast.success("Producto agregado");

  const getProducts = async () => {
    const response = await genericFetch('GET', 'productos')
    setProducts(response)
  }

  const handleAddCart = async () => {
    try{
      console.log(idAdd)
      const response = await genericFetch('POST', `carrito/${idAdd}`)
      notify()
    }
    catch(err){
      console.log(err)
    }
  }
  
  const handleDeleteProduct = async () =>{
    try{
      const response = await genericFetch('DELETE', `productos/${idDelete}`)
      setIsDeleted(true)
      setDeleteMessage(`Producto id #${idDelete} ${response.data.name} eliminado`)
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
      <ProductContainer 
        addToCardProduct={(id)=> getidAdd(id) + handleAddCart()}
        editProduct={(id)=> getidEdit(id)}
        deleteProduct={(id)=> getidDelete(id) + setOpenModal(true) }
        products={products}
      />
      <Modal handleClose={handleCloseModal} show={isOpen}>
        {
          !deleted ? 
          <div>
              <div className="container d-flex justify-content-center">
                <p className="fs-3">¿ Eliminar producto ID #{idDelete} ?</p>
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
}

export default App;
