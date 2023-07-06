import { Route, Routes, Navigate } from 'react-router-dom';
//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';


//Components
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';



function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path='/products/:id' element={<ProductDetail />}/>
          <Route path='/cart' element={<ShopCart />}/>
          <Route path='/products' element={<Store />}/>
          <Route path='/*' element={<Navigate to='/products'/>}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
