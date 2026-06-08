import React from 'react'
import Navbar from '@/components/navbar.jsx'
import Footer from '@/components/footer.jsx'
import '@/styles/About.css'
import { useNavigate } from 'react-router'

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <div className=' h-[100vh] flex flex-col items-center justify-center'>
                <div>
                    <h6 className='bg-gray-200 py-1 px-3 rounded-xl'>ABOUT VENDR</h6>
                </div>
                <div className='flex flex-col items-center '>
                    <h1 className='h1_about '>Shopping Made </h1>
                    <h1 className='h1_about'>Simple.</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='m-0 font-[400] text-[25px] tracking-[1px ]'>VENDR is a modern ecommerce platform focused on  </p>
                    <p className='m-0 font-[400] text-[25px] tracking-[1px ]'>providing quality products, secure shopping, and a</p>
                    <p className='m-0 font-[400] text-[25px] tracking-[1px ]'>seamless customer experience.</p>
                </div>
                <div className='mt-[40px]'>
                    <button onClick={()=> {navigate('/products')}} className='bg-black text-white px-10 pb-[10px] pt-[10px]  !flex !items-center !justify-center !text-center !rounded-xl '><h5 className='m-0 p-0'>Explore Products</h5></button>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About