import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
        // console.log(response.data);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />}></Route>
        <Route path='checkout' element={<CheckOutPage cart={cart} />}></Route>
        <Route path='orders' element={<OrdersPage cart={cart}/>}></Route>
        <Route path='tracking' element={<TrackingPage />}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
