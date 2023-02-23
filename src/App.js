import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {Home,Contact, Login,Register,Reset} from "./pages";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <> 
    <BrowserRouter>
    <ToastContainer/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Reset" element={<Reset/>}/>

    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
