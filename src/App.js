import { useEffect, useState } from 'react';
import { genericFetch } from './utils/serverCall';
import { ProductContainer, Menu } from './components';

function App() {
  
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await genericFetch('GET', 'productos')
      setProducts(response)
  }

  useEffect(()=>{
    getProducts()
  })

  return (
    <div>
      <Menu/>
      <ProductContainer products={products}/>
    </div>
  );
}

export default App;
