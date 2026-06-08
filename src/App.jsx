import { useState } from 'react'
import { Router,Route,BrowserRouter, Routes } from 'react-router';
import Home from '@/pages/Home.jsx';
import Auth from '@/pages/Auth.jsx';
import Products from '@/pages/Products.jsx';
import Checkout from '@/pages/Checkout.jsx';
import About from '@/pages/About.jsx';
import PaymentSuccess from '@/pages/PaymentSuccess.jsx';
import Contact from '@/pages/Contact.jsx';
import Profile from '@/pages/Profile.jsx';
import { useContext } from 'react';
import { Cartcontext } from '@/context/Cartcontext';
import { Cartprovider } from '@/context/Cartcontext';
import Cart from '@/pages/Cart';
import '@/styles/App.css';
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
            <Route path='profile' Component={Profile} />
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App
