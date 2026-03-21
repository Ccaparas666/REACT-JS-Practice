import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOutPage } from './pages/checkout/CheckOutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckOutPage />}></Route>
      <Route path='orders' element={<OrdersPage />}></Route>
      <Route path='tracking' element={<TrackingPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </>
  )
}

export default App
