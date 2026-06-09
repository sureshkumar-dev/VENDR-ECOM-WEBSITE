import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "@/styles/Auth.css";
import acclogo from "@/assets/icons/person_30dp_000000.png";
import maillogo from "@/assets/icons/mail_logo.png";
import pwdlogo from "@/assets/icons/visibility_logo.png";
import google from "@/assets/icons/search.png";
import person from "@/assets/icons/person_logo.png"
import close from "@/assets/icons/close_logo.png"
import { useNavigate } from 'react-router';

const Auth = () => {
    const API = import.meta.env.VITE_API_URL;
    const navigate = useNavigate()
    const[user,setuser]=useState(null)
    const [login, setlogin] = useState(true)
    const [signup, setsignup] = useState(false)
    const[regData,setregData] = useState({
        username:"",
        email:"",
        password:""
    })
    const[loginData,setloginData]=useState({
        email:"",
        password:""
    })
    const fetchuser = async() => {
        const token = await localStorage.getItem('token')
        const res = await axios.get(`${API}/profile`,{
            headers:{
                authorization:token
            }
        })
        setuser(res.data.User)
        
    }
    useEffect(()=>{
        fetchuser()
    },[])
    useEffect(()=>{
        console.log(user)
    },[user])
    const handlesignup = async(e) => {
        e.preventDefault()
        try{
            await axios.post(`${API}/auth/signup`,{
            username:regData.username,
            email:regData.email,
            password:regData.password
        })
        }catch(error){
            console.log(error);
            
        }
        
        console.log(regData)
    }
    
    const handlelogin = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post(`${API}/auth/login`,{
            email:loginData.email,
            password:loginData.password
        })
        console.log(response.data)
        localStorage.setItem("token",response.data.token)
        }catch(error){
            console.log(error);
            
        }
        
        console.log(loginData)
    }
    function opensignup() {
        if (login) {
            setlogin(false)
        }
        if (!signup) {
            setsignup(true)
        }
    }
    function openlogin() {
        if (signup) {
            setsignup(false)
        }
        if (!login) {
            setlogin(true)
        }
    }
    return (
        <>

            <div className="auth_page relative">
                <img onClick={()=>{navigate('/')}} className='absolute top-3 right-5 cursor-pointer' src={close} alt="" />
                <div className="acc_container relative">


                    <div  className={`left flex items-center justify-center`} style={{background:login? " linear-gradient(135deg,#111111,#1f2937)" : "white", borderTopRightRadius:login? "200px" :" ",borderBottomRightRadius:login? "200px" :" "}}>
                        <div style={{ display: signup ? "block" : "none" }} className="signup h-max w-[328px] flex flex-col align-between gap-y-2 ">
                            <div className='pb-[20px]'>
                                <h1 className='text-center sign-h1'>SignUp</h1>
                            </div>
                            <div className='w-[298px]'>
                                <div className='un-div flex items-center w-max   gap-5 rounded-[8px]'>
                                    <input onChange={(e)=>{setregData({...regData,username:e.target.value})}} className='ip-username w-[220px]' type="text" placeholder='Username' value={regData.username} />
                                    <img className=' pwdlogo h-[20px]' src={person} alt="mail logo" />
                                </div>

                                <br />
                                <div className='un-div flex items-center w-max   gap-5 rounded-[8px]'>
                                    <input onChange={(e)=>{setregData({...regData,email:e.target.value})}} className='ip-username w-[220px]' placeholder='Email' type="email" value={regData.email} />
                                    <img className=' pwdlogo h-[20px]' src={maillogo} alt="mail logo" />

                                </div>
                                <br />
                                <div className=' un-div flex items-center w-max   gap-5 rounded-[8px] '>
                                    <input onChange={(e)=>{setregData({...regData,password:e.target.value})}} className='ip-password w-[220px] ' placeholder='Password' type="password" value={regData.password} />
                                    <img className='pwdlogo h-[20px] ' src={pwdlogo} alt="pwdlogo" />
                                </div>

                                <div className='checkbox-div flex gap-1 items-center pt-[10px] pb-[10px]'>
                                    <input type="checkbox" />
                                    <p className='m-0'>I agree to the Terms & Conditions </p>
                                </div>
                                <button onClick={handlesignup} className='signup-btn bg-blue-400 w-full  h-[40px] text-white  rounded-2 text-2xl font-bold '>Register</button>
                                <p className='text-center pt-2'>or continue with</p>
                                <button className='google-btn flex items-center gap-x-2 bg-blue-400 w-full  h-[40px]  rounded-2 justify-center'> <img className='h-[20px]' src={google} alt="google" /> Google</button>
                            </div>
                        </div>
                        <div style={{ display: login ? "block" : "none" }} className="goto-signup  flex flex-col items-center justify-center">
                            <h1 className='left-h1 font-[800] text-white text-center '>
                                New Here?
                            </h1>

                            <p className=' left-p '>
                                Create an account to shop seamlessly.
                            </p>

                            <center>
                                <button className=' left-btn bg-red-700 p-2 px-4 text-[20px]' onClick={opensignup}>
                                    Create Account
                                </button>
                            </center>
                        </div>
                    </div>
                    <br />
                    <div className="right" style={{background:signup? " linear-gradient(135deg,#111111,#1f2937)" : "white", borderTopLeftRadius:signup? "200px" :" ",borderBottomLeftRadius:signup? "200px" :" "}}>
                        <div className="login" style={{ display: login ? "block" : "none" }}>
                            <div>
                                <h1 className='text-center mt-[90px] pb-[20px] font-[500]'>Login</h1>
                            </div>
                            <div>
                                <div className='un-div flex items-center w-max   gap-5 rounded-[8px]'>
                                    <input onChange={(e)=>{setloginData({...loginData,email:e.target.value})}} className='ip-username w-[220px]' placeholder='Email' type="email" value={loginData.email} />
                                    <img className=' pwdlogo h-[20px]' src={maillogo} alt="mail logo" />

                                </div>
                                <br />
                                <div className=' un-div flex items-center w-max   gap-5 rounded-[8px] '>
                                    <input onChange={(e)=>{setloginData({...loginData,password:e.target.value})}} className='ip-password w-[220px] ' placeholder='Password' type="password" value={loginData.password}/>
                                    <img className='pwdlogo h-[20px] ' src={pwdlogo} alt="pwdlogo" />
                                </div>
                                <br />
                                <div className='flex justify-between pt-[-10px]'>
                                    <div>
                                        <input className='ip-rm' type="checkbox" /><p className='p-rm '>Remember Me</p>
                                    </div>
                                    <p className='cursor-pointer'>Forget Password</p>
                                </div>

                                <button onClick={handlelogin} className='login-btn bg-blue-400 w-full  h-[40px] text-white  rounded-2 text-2xl font-bold '>Login</button>
                                <p className='text-center pt-2'>or continue with</p>
                                <button className=' google-btn flex items-center gap-x-2 bg-blue-400 w-full  h-[40px]  rounded-2 justify-center'> <img className='h-[20px]' src={google} alt="google" /> Google</button>
                            </div>
                        </div>
                        <div style={{ display: signup ? "block" : "none" }} className="goto-login">
                            <h1 className='welcome text-center'>
                                Have account?
                            </h1>
                            <div className='flex'>
                                <p>Continue shopping securely with fast checkout access.</p>
                            </div>

                            <center>
                                <button className=' bg-red-700  log-btn' onClick={openlogin}>
                                    Login
                                </button>
                            </center>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Auth