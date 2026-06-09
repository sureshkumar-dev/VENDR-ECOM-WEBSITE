import Nav from '@/components/navbar.jsx';
import Section from '@/components/section.jsx';
import Categories from '@/components/categories.jsx';
import News from '@/components/news.jsx';
import Reviews from '@/components/reviews.jsx';
import Newsletter from '@/components/newsletter.jsx';
import Footer from '@/components/footer.jsx';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { Cartcontext } from '../context/Cartcontext';
import '@/styles/home.css';
function Home() {
    const API = import.meta.env.VITE_API_URL;
    console.log("API URL =", import.meta.env.VITE_API_URL);
    const {cart ,setcart} = useContext(Cartcontext)
    const fetchuser = async() =>{
        const token = localStorage.getItem("token")
        const res = await axios.get(`${API}/profile`,{
            headers:{
                authorization:token
            }
        })
        console.log('data check' ,res.data)
    }
    useEffect(()=>{
        fetchuser()
    },[])
    return (
        <>
        <Nav  />
        <Section />
        <Categories />
        <News />
        <Reviews />
        <Newsletter />
        <Footer />
        </>
    )
    
}
export default Home;