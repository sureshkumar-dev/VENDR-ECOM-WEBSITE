import { useState } from 'react'
import { Router,Route,BrowserRouter, Routes } from 'react-router';
import Home from '@/pages/Home.jsx';
import Auth from '@/pages/Auth';
import Products from '@/pages/Products';
import Checkout from '@/pages/Checkout';
import About from '@/pages/About';
import PaymentSuccess from '@/pages/PaymentSuccess.jsx';
import Contact from '@/pages/Contact';
import { useContext } from 'react';
import { Cartcontext } from './context/Cartcontext';
import { Cartprovider } from './context/Cartcontext';
import Cart from '@/pages/Cart';
import '@/styles/app.css';
function App() {
  
  
  return (
    <>
      
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/auth' Component={Auth} />
            <Route path='/products' Component={Products} />
            <Route path='/about' Component={About} /> 
            <Route path='/contactUs' Component={Contact} />
            <Route path='/cart' Component={Cart}/>
            <Route path='/checkout' Component={Checkout} />
            <Route path='/payment-success' Component={PaymentSuccess} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
