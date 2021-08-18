import React from 'react';
import {Main, Cart, NewProduct, EditProduct} from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
   <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/new-product' component={NewProduct}/>
            <Route path='/edit-product/:id' component={EditProduct}/>
          </Switch>
   </BrowserRouter>
  );
}

export default App;