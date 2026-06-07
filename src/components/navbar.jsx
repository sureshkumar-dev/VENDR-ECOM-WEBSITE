import "@/styles/navbar.css";
import weblogo from "@/assets/images/VENDR-web-logo.png";
import searchlogo from "@/assets/icons/search_logo.png";
import cartlogo from "@/assets/icons/cart_logo.png";
import profilelogo from "@/assets/icons/account_logo.png";
import closeicon from "@/assets/icons/close-icon.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Cartcontext } from "../context/Cartcontext";
function Nav() {
    const navigate = useNavigate();
    const products = [
        { id: 1, name: "iPhone 14", category: "mobile", brand: "Apple", price: 69999, keywords: ["iphone", "apple", "ios", "mobile"] },
        { id: 2, name: "iPhone 15 Pro", category: "mobile", brand: "Apple", price: 134999, keywords: ["iphone", "apple", "ios", "pro"] },
        { id: 3, name: "Samsung Galaxy S23", category: "mobile", brand: "Samsung", price: 74999, keywords: ["samsung", "galaxy", "android"] },
        { id: 4, name: "Samsung Galaxy A54", category: "mobile", brand: "Samsung", price: 38999, keywords: ["samsung", "android", "mobile"] },
        { id: 5, name: "Redmi Note 13 Pro", category: "mobile", brand: "Redmi", price: 24999, keywords: ["redmi", "xiaomi", "android"] },
        { id: 6, name: "OnePlus Nord CE 3", category: "mobile", brand: "OnePlus", price: 26999, keywords: ["oneplus", "android"] },
        { id: 7, name: "Realme Narzo 60", category: "mobile", brand: "Realme", price: 17999, keywords: ["realme", "android"] },
        { id: 8, name: "iQOO Neo 7", category: "mobile", brand: "iQOO", price: 29999, keywords: ["iqoo", "gaming", "android"] },
        { id: 9, name: "MacBook Air M1", category: "laptop", brand: "Apple", price: 89999, keywords: ["macbook", "apple", "m1"] },
        { id: 10, name: "MacBook Pro M2", category: "laptop", brand: "Apple", price: 129999, keywords: ["macbook", "apple", "pro"] },
        { id: 11, name: "Dell Inspiron 15", category: "laptop", brand: "Dell", price: 55999, keywords: ["dell", "laptop"] },
        { id: 12, name: "HP Pavilion Gaming", category: "laptop", brand: "HP", price: 67999, keywords: ["hp", "gaming"] },
        { id: 13, name: "ASUS TUF F15", category: "laptop", brand: "ASUS", price: 72999, keywords: ["asus", "gaming"] },
        { id: 14, name: "Lenovo IdeaPad Slim 3", category: "laptop", brand: "Lenovo", price: 45999, keywords: ["lenovo", "laptop"] },

        { id: 15, name: "boAt Rockerz 450", category: "headphones", brand: "boAt", price: 1499, keywords: ["boat", "headphones", "wireless"] },
        { id: 16, name: "Sony WH-1000XM4", category: "headphones", brand: "Sony", price: 24999, keywords: ["sony", "noise cancelling"] },
        { id: 17, name: "JBL Tune 760NC", category: "headphones", brand: "JBL", price: 7999, keywords: ["jbl", "headphones"] },
        { id: 18, name: "Sennheiser HD 450BT", category: "headphones", brand: "Sennheiser", price: 12999, keywords: ["sennheiser", "wireless"] },

        { id: 19, name: "Apple AirPods Pro", category: "earbuds", brand: "Apple", price: 24999, keywords: ["airpods", "apple", "buds"] },
        { id: 20, name: "boAt Airdopes 141", category: "earbuds", brand: "boAt", price: 1299, keywords: ["boat", "earbuds"] },
        { id: 21, name: "Realme Buds Air 5", category: "earbuds", brand: "Realme", price: 3999, keywords: ["realme", "buds"] },
        { id: 22, name: "Samsung Galaxy Buds 2", category: "earbuds", brand: "Samsung", price: 7999, keywords: ["samsung", "buds"] },

        { id: 23, name: "Apple Watch Series 9", category: "watch", brand: "Apple", price: 41999, keywords: ["apple", "watch"] },
        { id: 24, name: "Samsung Galaxy Watch 6", category: "watch", brand: "Samsung", price: 29999, keywords: ["samsung", "watch"] },
        { id: 25, name: "Noise ColorFit Pro 4", category: "watch", brand: "Noise", price: 3499, keywords: ["noise", "watch"] },
        { id: 26, name: "Fire-Boltt Phoenix", category: "watch", brand: "Fire-Boltt", price: 1999, keywords: ["fireboltt", "watch"] },


        { id: 27, name: "iPad 10th Gen", category: "tablet", brand: "Apple", price: 39999, keywords: ["ipad", "apple", "tablet"] },
        { id: 28, name: "Samsung Galaxy Tab S9", category: "tablet", brand: "Samsung", price: 72999, keywords: ["samsung", "tablet"] },
        { id: 29, name: "Lenovo Tab M10", category: "tablet", brand: "Lenovo", price: 14999, keywords: ["lenovo", "tablet"] },


        { id: 30, name: "Apple 20W Charger", category: "accessory", brand: "Apple", price: 1999, keywords: ["charger", "apple"] },
        { id: 31, name: "Mi Power Bank 20000mAh", category: "accessory", brand: "Mi", price: 2199, keywords: ["powerbank", "mi"] },
        { id: 32, name: "boAt Type-C Cable", category: "accessory", brand: "boAt", price: 399, keywords: ["cable", "boat"] },
        { id: 33, name: "Laptop Backpack HP", category: "accessory", brand: "HP", price: 1499, keywords: ["bag", "laptop"] }
    ];
    const {cart , setcart} = useContext(Cartcontext)
    const [searchTerm, setSearchTerm] = useState("");
    const [filres, setFilres] = useState([""]);
    const [showres, setShowres] = useState(false);

    function handleSearchChange(event) {
        setSearchTerm(event.target.value);
        setShowres(true);
        console.log(searchTerm);
    }
    useEffect(() => {
        const result = products.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilres(result);
    }, [searchTerm]);
    let count = 0;
    function openSearchBar() {
        document.querySelector(".search-wrap").style.display = "block";
        document.querySelector(".icon-search-nav").style.display = "none";
        document.querySelector(".nav-links").style.display = "none";
    }
    function closeSearchBar() {
        document.querySelector(".search-wrap").style.display = "none";
        document.querySelector(".icon-search-nav").style.display = "block";
        document.querySelector(".nav-links").style.display = "flex";
        setSearchTerm("");
        setShowres(false);
    }
    window.addEventListener("scroll", () => {
        let nav = document.querySelector("nav");

        if (window.scrollY > 100) {
            nav.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
            console.log("scrolled");
        }
        else {
            nav.style.boxShadow = "none";
        }
    });
    return (

        <>
            <nav >
                <div >
                    <img className="web-logo" src={weblogo} alt="weblogo" />
                </div>
                <div>
                    <ul className="nav-links">
                        <li onClick={()=>{navigate('/')}}>Home</li>
                        <li onClick={()=>{ navigate('/products') }}>All Products</li>
                        <li onClick={()=>{navigate('/about')}}>About Us</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div style={{ display: 'flex', gap: '15px', paddingRight: '20px' }}>
                    <div className="search-wrap">
                        <input className="searchbar" type="text" placeholder="Search for products " value={searchTerm} onChange={handleSearchChange} />
                        <img className="icon-search" src={searchlogo} alt="search" />
                        <img className="icon-close" src={closeicon} alt="close" onClick={closeSearchBar} />
                        <div className={showres ? "search-result show" : "search-result hide"}>
                            <ul className="search-items" >
                                {filres.map((item) => (
                                    <li onClick={() => {
                                        setSearchTerm(item.name);
                                        setShowres(false);
                                    }} className="searched-items" key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <img className="icon-search-nav" src={searchlogo} alt="search" onClick={openSearchBar} />
                    <div className="cart-div">
                        <img onClick={() => {
                            console.log("clicked cart");
                            navigate('/cart');
                        }} className="cart-icon" src={cartlogo} alt="cart" />
                        <div className="cart-count">{cart.length}</div>
                    </div>
                    <img className="icon" src={profilelogo} alt="profile" />
                </div>

            </nav>


        </>
    )
}
export default Nav;