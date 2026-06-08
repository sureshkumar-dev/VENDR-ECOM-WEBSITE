import React, { useEffect } from 'react'
import Nav from '@/components/navbar.jsx'
import products from "@/data/data.js";
import dellogo from "@/assets/icons/deletelogo.png"
import Footer from "@/components/Footer.jsx"
import { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import lock from '@/assets/icons/lock_logo.png'
import tag from '@/assets/icons/best_logo.png';
import Newsletter from "@/components/newsletter.jsx"
import { useNavigate } from 'react-router';
import axios from 'axios';
import "@/styles/cart.css"
import "../styles/index.css"

const Cart = () => {
  const navigate = useNavigate()
  const { cart, setcart } = useContext(Cartcontext);
  function increase(id) {
    setcart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }
  function decrease(id) {
    setcart(
      cart.map((item) =>
        item.id === id ? {
          ...item,
          quantity: item.quantity > 1
            ? item.quantity - 1
            : 1
        } : item
      )
    )
  }
  function deleteitem(id) {
    setcart(
      cart.filter((item) => item.id !== id)
    )
  }
  const fetchcart = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.post('http://localhost:5000/fetchcart',
      { cart }, {
      headers: {
        authorization: token
      }
    })
    console.log(res.data)
  }
  useEffect(() => {
    fetchcart()
  }, [cart])
  function checkout() {
    if (cart.length === 0) {
      alert('your cart is empty please purchase some products')
      return
    }
    navigate('/checkout')
  }
  const total = cart.reduce((sum, item) =>
    sum + (item.quantity * item.price), 0
  )
  const tax = total * 0.18;
  const grandtotal = total + tax;
  console.log(cart)
  return (
    <>
      <Nav />
      <div className='flex items-center flex-col'>
        <div className='mt-[30px]  pt-20 bg-white max-w-[1300px] min-w-[1300px]'>
          <h1 className='cart_head'>Shopping Cart</h1>
          <p className='font-[500] text-4xl pb-[10px]'>{cart.length} Items In Your Cart</p>
        </div>

        <div className='bg-white min-w-[1300px] max-w-[1300px] mt-10 flex justify-between'>
          <div className='w-[750px]'>

            {cart.map((items) => {
              return (
                <>
                  <div className="cart_list">
                    <div className="cart mb-4 bg-white shadow-[0px_10px_50px_#0000001a] relative p-4 rounded-2xl h-[250px] w-[750px]">
                      <div className='rounded-xl w-[230px] h-[200px] absolute left-6 bg-white flex justify-center items-center'>
                        <img className='max-h-[160px]' src={items.image} alt="" />
                      </div>
                      <div className='absolute right-0 h-[210px] w-[445px]'>
                        <p className='font-[600] text-xl m-0'>{items.type}</p>
                        <h2 className='cart_name'>{items.name}</h2>
                        <div className='absolute bottom-3  flex items-center gap-3 px-4 rounded-[25px] bg-gray-200'>
                          <button><h3 onClick={() => { decrease(items.id) }} className='font-[600]'>-</h3></button>
                          <h3>{items.quantity}</h3>
                          <button><h3 onClick={() => { increase(items.id) }}>+</h3></button>
                        </div>

                      </div>
                      <div className='absolute right-9 bottom-5'>
                        <h2>₹{items.price * items.quantity}</h2>
                      </div>
                      <img className='absolute right-5 top-5 w-6' src={dellogo} alt="delete" onClick={() => deleteitem(items.id)} />

                    </div>
                  </div>
                </>
              )
            })}
          </div>
          <aside className='sticky top-38 mb-6 p-7 w-[420px] [box-shadow:0px_2px_4px_#00000066,0px_7px_13px_-3px_#0000004d,0px_-3px_0px_inset_#00000033] h-fit bg-white rounded-2xl '  >
            <div>
              <h1 className='h1_sum text-left pb-[10px] '>Summary</h1>

            </div>
            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p className='font-[700]'>₹ {total}.00</p>
            </div>
            <div className='flex justify-between'>
              <p>Shipping</p>
              <p className='font-[700]'>Free</p>
            </div>
            <div className='flex justify-between'>
              <p>Estimated Tax</p>
              <p className='font-[700]'>₹{tax.toFixed(2)}</p>
            </div>
            <hr />
            <div className='flex justify-between pb-[10px]'>

              <h4>Total</h4>
              <h4>₹{grandtotal}</h4>
            </div>
            <button onClick={() => { checkout() }} className='bg-black text-white w-full py-2 !rounded-lg !text-[20px]'>Checkout</button>
            <div className='pt-[30px]'>
              <div className='flex items-center gap-1'>

                <img src={lock} alt="locklogo" />
                <p className='m-0' >Your transactions are safe and secure</p>
              </div>
              <div className='flex items-center gap-1 pt-[5px]'>

                <img src={tag} alt="tagging" />
                <p className='m-0'>Official warranty included with eligible products</p>
              </div>

            </div>
          </aside>
        </div>
      </div>
      <Newsletter />
      <Footer />




    </>
  )
}

export default Cart