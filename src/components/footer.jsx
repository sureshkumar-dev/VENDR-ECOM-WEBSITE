import "@/styles/footer.css";
import weblogo from "@/assets/images/VENDR-web-logo.png";
import fplogo from "@/assets/icons/fb_logo.png";
import xlogo from "@/assets/icons/x_logo.png";
import iglogo from "@/assets/icons/org_ig_logo.png";
import lin from "@/assets/icons/linkedin_logo.png";
import { useNavigate } from "react-router";
function Footer() {
    const navigate = useNavigate()
    return (
        <>
            <footer>
                <hr className="footer-hr1" />
                <div className="footer-flex">
                    <div className="webinfo">
                        
                        <img className="footer-logo" src={weblogo} alt="VENDR Web Logo" />
                        <p className="footer-text">Selling Premium Products and Services</p>
                        <p className="footer-text"> Your Everyday Partner</p>
                        <div className="logo-div">
                            <img className="footer-logo-social" src={fplogo} alt="Facebook Logo" />
                            <img className="footer-logo-social" src={xlogo} alt="X Logo" />
                            <img className="footer-logo-social" src={iglogo} alt="Instagram Logo" />
                            <img className="footer-logo-social" src={lin} alt="LinkedIn Logo" />
                        </div>
                    </div>
                    <div className="pages">
                        <h3 className="col-head">Pages</h3>
                        <ul>
                            <li onClick={()=>{navigate('/')}} className="col-li">Home</li>
                            <li onClick={()=>{navigate('/products')}} className="col-li">Categories</li>
                            <li onClick={()=>{navigate('/about')}} className="col-li">News</li>
                            <li onClick={()=>{navigate('/')}} className="col-li">Reviews</li>
                        </ul>
                    </div>
                    <div className="about">
                        <h3 className="col-head">About Us</h3>
                        <ul>
                            <li className="col-li">FAQ</li>
                            <li onClick={()=>{navigate('/')}} className="col-li">Contact</li>
                            <li onClick={()=>{navigate('/products')}} className="col-li">Product</li>
                            <li className="col-li">Services</li>
                        </ul>

                    </div>
                    <div className="contactus">
                        <h3 className="col-head">Contact Us</h3>
                        <input className="contact-input" type="text" placeholder="Enter your Name" />
                        <input className="contact-input2" type="email" placeholder="Enter your Email" />
                        <input className="contact-input3" type="text" placeholder="Enter your Message" />
                        <button className="contact-button">Submit</button>
                    </div>
                </div>
                <hr className="footer-hr" />
                <div className="footer-foot">
                    <p className="footer-foot-text">© 2026 VENDR. All rights reserved.</p>
                    <div className="last-div">
                        <p>Terms and Conditions</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;