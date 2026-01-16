import MidPage from './MidPage'
import Footer from './Footer'
import Header from './Header'
import { Routes, Route } from "react-router-dom";
import Hobbies from "./Hobbies";

import './css/App.css'

function App() {
 

  return (   
    <>
      
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<MidPage />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes> 
      <Footer />
    </>
  )
}

export default App
