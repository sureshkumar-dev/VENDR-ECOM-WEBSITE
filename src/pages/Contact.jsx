import React from 'react'
import Navbar from "@/components/navbar.jsx"
import Footer from "@/components/Footer.jsx"
import Newsletter from "@/components/Newsletter.jsx"

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className=' h-[100vh] flex flex-col items-center mt-[80px]'>

                <div className='flex flex-col items-center '>
                    <h2 className='h1_about '>We're Here To Help</h2>

                </div>
                <div className='flex flex-col items-center '>
                    <p className='m-0 !font-[400] text-[20px]'>Have a question or need assistance? Get in touch with </p>
                    <p className='m-0 !font-[400] text-[20px]'> our team and we'll be happy to help.</p>
                </div>
                <div className='bg-white [box-shadow:rgba(17,17,26,0.1)_0px_4px_16px,rgba(17,17,26,0.1)_0px_8px_24px,rgba(17,17,26,0.1)_0px_16px_56px] flex-col rounded-xl  h-max w-max mt-[30px] p-[20px] '>
                    <div className='flex w-full gap-2 '>
                        <div>
                            <p className='m-0 font-[500] pb-[5px]'>Full Name</p>
                            <input type="text" className='py-1 bg-gray-200 rounded-[5px] w-[340px] pl-[10px] ' placeholder='Enter Your Name' />

                        </div>
                        <div>
                            <p className='m-0 font-[500] pb-[5px]'>Email</p>
                            <input className='w-[340px] py-1 bg-gray-200 rounded-[5px] pl-[10px] ' type="email" placeholder='Enter Your Email' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <p className='m-0 font-[500] pb-[5px]'>Subject</p>
                        <input className='w-full py-1 bg-gray-200 pl-[10px] rounded-[5px]' type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className='flex flex-col mt-[15px]'>
                        <p className='m-0 font-[500] pb-[5px] '> Message</p>
                        <input className='w-full  pl-[10px] bg-gray-200 rounded-[5px]  pb-[80px]' type="email" placeholder='Enter Your Email' />

                    </div>
                    <div className='pt-[15px]'>
                        <button className='w-full bg-black text-white py-2 !rounded-sm '>Send Message</button>

                    </div>

                </div>
            </div>
            <div className='w-full flex justify-center pb-[20px]'>
                <div className='w-full max-w-[1200px] flex justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Email</h3>
                    <h4>vendr@gmail.com</h4>
                </div>
                <div className='flex flex-col items-center justify-center'><h3>Phone</h3><h4>+1 110 654 73</h4></div>
                <div className='flex flex-col items-center justify-center'><h3>Address</h3> <h4>US, New York</h4></div>
            </div>
            </div>
            <Newsletter/>
            <Footer/>
            
        </>
    )
}

export default Contact