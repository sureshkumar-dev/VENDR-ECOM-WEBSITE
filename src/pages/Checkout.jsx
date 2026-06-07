import React, { useContext, useState } from 'react'
import weblogo from '@/assets/images/VENDR-web-logo.png';
import "@/styles/checkout.css";
import { Cartcontext } from '../context/Cartcontext';
import { useNavigate } from 'react-router';
import axios from 'axios';
const Checkout = () => {
    const navigate = useNavigate()
    const { cart, setcart } = useContext(Cartcontext)
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const tax = total * 0.18
    const discount = 50
    const grandtotal = total + tax - discount
    const handlepayment = async () => {
        console.log(import.meta.env.VITE_RAZORPAY_KEY);
        const amt = await axios.post('http://localhost:5000/create-order', {
            amount: grandtotal
        })
        const order = amt.data
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,

            amount: order.amount,

            currency: order.currency,

            name: "VENDR",

            description: "Order Payment",

            order_id: order.id,

            handler: async function (response) {
                console.log(response);

                navigate("/payment-success");


            }

        }
        const razor = new window.Razorpay(options)
        razor.open()

    }
    return (
        <>
            <div className='border-b flex justify-center'>
                <div className='flex justify-between items-center w-full max-w-[1350px] pt-[15px] pb-[15px]'>
                    <img className='w-[150px]' src={weblogo} alt="website" />
                    <h4>Secure Checkout</h4>
                </div>
            </div>
            <div className='w-full mx-auto mt-8 max-w-[1350px] flex justify-center'>
                <div className=' flex justify-between bg-white  w-[1350px]'>
                    <div className='cards flex w-200 flex-col gap-4 bg-white'>
                        <div className='w-full bg-white shadow p-[20px] rounded-xl'>
                            <h3 className='pb-[15px]'>Contact Information</h3>
                            <input className='w-full rounded-lg py-2 pl-[20px] border-1' type="text" placeholder='Full Name' />
                            <div className='pt-[10px] flex gap-3'>
                                <input type="text" className='w-1/2 rounded-lg py-2 pl-[20px]  border-1' placeholder='Email' /><input type="text" placeholder='Mobile Number' className=' rounded-lg w-1/2 py-2 pl-[20px] border-1' />
                            </div>
                        </div>
                        <div className='bg-white p-[20px] shadow rounded-xl'>
                            <h3 className='pb-[15px]'>Shipping Address</h3>
                            <div className='flex gap-3 pb-[15px]'>
                                <input type="text" placeholder='Recipient Name' className=' input_box w-1/2' />
                                <input type="text" placeholder='Recipient Number' className=' input_box w-1/2' />
                            </div>
                            <div className='flex gap-3 flex-col'>
                                <input type="text" className='input_box w-full' placeholder='Street Name' />
                                <input type="text" className='input_box w-full' placeholder='Apartment, Suite, Landmark (Optional)' />
                            </div>
                            <div className='flex pt-[15px] pb-[15px] gap-3 '>
                                <input type="text" placeholder='City' className='flex-1 input_box' />
                                <input type="text" placeholder='State' className='flex-1 input_box' />
                                <input type="text" placeholder='Zip Code' className='flex-1 input_box' />
                            </div>
                            <input type="text" className=' input_box w-full' placeholder='Country' />
                        </div>

                    </div>
                    <div className='w-[370px] bg-white shadow rounded-xl p-[20px]'>
                        <h3 className='pb-[10px]'>Order Summary</h3>
                        <div className='custom-scrollbar w-full h-[230px] p-[20px] rounded-lg  bg-white overflow-y-auto  '>
                            {cart.map((items) => {
                                return (
                                    <>
                                        <div key={items.id} className='flex flex-col  relative'>
                                            <div className='flex w-full justify-between pb-[15px]'>
                                                <img className='max-w-[100px] max-h-[100px] left-0 top-0' src={items.image} alt="image" />
                                                <div>
                                                    <h6 className='right-0'>{items.name}</h6>
                                                    <h6>{items.type}</h6>
                                                    <h6 className='right-0'>Qty : {items.quantity} | Price : ₹{items.price}</h6>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )
                            }
                            )}
                        </div>
                        <hr />
                        <div className='pl'>
                            <div className='flex  justify-between pb-[10px]'>
                                <p className='m-0 font-[600]'>Subtotal</p>
                                <p className='m-0 font-[600]'>₹{total}</p>
                            </div>
                            <div className='flex  justify-between pb-[10px]'>
                                <p className='m-0 font-[600]'>Tax</p>
                                <p className='m-0 font-[600]'>₹{tax}</p>
                            </div>
                            <div className='flex  justify-between pb-[10px]'>
                                <p className='m-0 font-[600]'>Shipping</p>
                                <p className='m-0 font-[600] text-green-700'>Free</p>
                            </div>
                            <div className='flex  justify-between pb-[10px] text-red-700'>
                                <p className='m-0 font-[600]'>Discount</p>
                                <p className='m-0 font-[600]'>- ₹{discount}</p>
                            </div>
                            <div className='flex  justify-between pb-[10px]'>
                                <h3>Total</h3>
                                <h3>₹{grandtotal}</h3>
                            </div>
                            <button onClick={() => { handlepayment() }} className='w-full py-[10px] bg-black text-white !rounded-lg'>Continue to Razorpay</button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Checkout