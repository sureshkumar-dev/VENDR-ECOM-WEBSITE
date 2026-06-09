import React, { useEffect, useState } from 'react'
import "@/styles/index.css"
import { useContext } from 'react';
import { Cartcontext } from '@/context/Cartcontext';
import Newsletter from "@/components/newsletter.jsx"
import Nav from '@/components/navbar.jsx'
import droplogo from "@/assets/icons/droplogo.png"
import Footer from "@/components/footer.jsx"
import axios from 'axios'
import iphone from "@/assets/images/iphone.webp"
import s26 from "@/assets/images/samsungs26.webp"
import acer from "@/assets/images/acer.webp";
import bag from "@/assets/images/bag.webp";
import fasttrack from "@/assets/images/fasttrack.webp";
import firestick from "@/assets/images/firestick.webp";
import flip from "@/assets/images/flip.webp";
import headphone from "@/assets/images/headphone.webp";
import iphone2 from "@/assets/images/iphone.webp";
import iqoo from "@/assets/images/iqoo.webp";
import jbl_speaker from "@/assets/images/jbl_speaker.webp";
import jbl_wired from "@/assets/images/jbl_wired.webp";
import mouse from "@/assets/images/mouse.webp";
import noise_n1 from "@/assets/images/noise_n1.webp";

import noise_watch from "@/assets/images/noise_watch.webp";
import pen from "@/assets/images/pen.webp";
import pen2 from "@/assets/images/pen2.webp";
import pendrive from "@/assets/images/pendrive.webp";
import ps5 from "@/assets/images/ps5.webp";
import redmi from "@/assets/images/redmi.webp";
import samsungs26 from "@/assets/images/samsungs26.webp";
import zeb_headphone from "@/assets/images/zeb_headphone.webp";
import fastrack from "@/assets/images/fastrack.webp";
import oneplus from "@/assets/images/oneplus.webp";
import macbook from "@/assets/images/macbook.webp";
import keyboard from "@/assets/images/zeb_keyboard.webp";
import products from '../data/data';

const Products = () => {
        const API = import.meta.env.VITE_API_URL;

    const { cart, setcart } = useContext(Cartcontext)
    console.log(cart);

    const [sort, setsort] = useState("All")
    const [drop, setdrop] = useState(false)
    const [product, setproduct] = useState()
    const [Price, setPrice] = useState(500)

    const fetchapi = async () => {
        const res = await axios.get('https://dummyjson.com/products/category/smartphones')
        setproduct(res.data)
    }
    const fetchcart = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.post(`${API}/fetchcart`,
            { cart }, {
            headers: {
                authorization: token
            }
        })
        console.log(res.data)
    }
    useEffect(()=>{
        fetchcart()
    },[cart])
    useEffect(() => {
        fetchapi();
    }, [])
    console.log(product)
    return (
        <>
            <Nav />

            <div className='flex flex-col justify-center items-center mt-[100px]'>
                <div className="product_section  flex justify-center   ">
                    <div className='flex items-center justify-between w-[1400px] pl-5   bg-white'>

                        <p className='m-0 font-[400] '>Showing <span className='font-[600]'> 128</span> Results</p>
                        <div className='flex items-center justify-center gap-3'>
                            <p className='m-0'>Sort By :</p>
                            <div className='relative'>
                                <button onClick={() => { setdrop(drop ? false : true) }} className='flex gap-3 pl-1 items-center font-[600] pr-[20px]'>{sort}<img src={droplogo} alt="drop" /></button>
                                <div style={{ display: drop ? "block" : "none" }} className='absolute top-full left-[0] bg-white'>
                                    <ul className='p-0 m-0 border-1 px-1 '>
                                        <li onClick={() => { setsort("Price"); setdrop(drop ? false : true) }} className='border-b hover:bg-gray-100'>Price</li>
                                        <li onClick={() => { setsort("Category"); setdrop(drop ? false : true) }} className='hover:bg-gray-100'>Category</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='w-[1400px] pt-[40px] bg-white  flex'>
                    <div className="sidebar sticky top-[70px] self-start w-[200px] bg-white flex flex-col items-left pl-5 pr-6">
                        <div>
                            <p className='font-[500]'>CATEGORIES</p>
                            <p>All Products</p>
                            <p>Laptops</p>
                            <p>Phones</p>
                            <p>Wearables</p>
                        </div>

                        <div className='pt-4'>
                            <p className='m-0 text-left font-[500]'>PRICE RANGE</p>
                            <input type="range" min="50"
                                max="1000"
                                value={Price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                                className='w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black' />
                            <div className='flex justify-between'>
                                <p>₹50</p><p>₹{Price}</p>
                            </div>
                        </div>
                        <div className='pt-4'>
                            <p className='font-[500]'>BRAND</p>
                            <div className='flex gap-1'>
                                <input type="checkbox" /><p className='m-0'>Noise</p>

                            </div>
                            <br />
                            <div className='flex gap-1'>
                                <input type="checkbox" /><p className='m-0'>Samsung</p>

                            </div>
                            <br />
                            <div className='flex gap-1'>
                                <input type="checkbox" /><p className='m-0'>Apple</p>

                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-full '>
                        <div>
                            <div className='p-4 grid gap-x-6 grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-6'>
                                {products.map((items) => {
                                    return (
                                        <>
                                            <div className="card shadow-[rgba(149,157,165,0.2)_0px_8px_24px] p-3 w-full rounded-3 transition-transform duration-300 ease-in-out hover:scale-103 active:scale-95">
                                                <div className='flex justify-center'>
                                                    <img className='max-h-[170px] max-w-full object-contain' src={items.image} alt="iphone" />

                                                </div>
                                                <div className='flex justify-between pt-4 items-center'>
                                                    <h5 >{items.name}</h5>
                                                    <h5><span className='text-[#FFAE00] font-[600] text-[15px]'>&#9733;</span> <span className='text-[15px]'>{items.rating}</span></h5>
                                                </div>
                                                <div>
                                                    <p className='font-[400]'>{items.description}</p>
                                                </div>
                                                <div className='flex justify-between'>
                                                    <p className='m-0 font-[700] text-xl'>₹ {items.price}</p> <button onClick={() => setcart((prev) => [...prev, items])} className='bg-black text-white font-[500] px-2 pt-1 pb-1 rounded-3 '>Add to Cart</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Products