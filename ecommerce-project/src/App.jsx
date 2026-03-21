import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { CheckOut } from './pages/CheckOut';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='checkout' element={<CheckOut />}></Route>
    </Routes>
    </>
  )
}

export default App
