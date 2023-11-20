
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
    </>
  )
}

export default App
