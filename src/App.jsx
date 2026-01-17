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
        <Route path="/" element={
          <>
            <Header />
            <MidPage />
            <Footer />
          </>
        } />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes> 
    </>
  )
}

export default App
