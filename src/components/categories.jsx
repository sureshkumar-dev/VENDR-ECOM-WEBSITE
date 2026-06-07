import "@/styles/categories.css";
import Browsebtn from "@/components/browsebtn.jsx";
import smartwatchs from "@/assets/images/watches_grp_tn.png";
import laptop from "@/assets/images/laptop.png";
import headphone from "@/assets/images/hp_bottom.png";
import mobile from "@/assets/images/mobile_tn.png";
import arrow from "@/assets/icons/black_arrow.png";
function Categories() {
    return (
        <>
            <div className="categories">
                <div className="cat-text">
                    <h1 className="all-h1">Browse By Categories</h1>
                    <p className="all-ph">Explore products across multiple categories.</p>
                    <p className="all-ph">Find what you need in just a few clicks.</p>
                </div>
                <div className="cat-container">
                <div className="cat-grid">
                    <div className="box1">
                        <img className="smartwatchs" src={smartwatchs} alt="Smartwatches" />
                        <h2 className="all-products">All Products</h2>
                        <p className="all-products-text">Explore our complete product collection.</p>
                        <div className="browse-btn-div">
                            <Browsebtn text="Browse All Products" />
                        </div>
                    </div>
                    <div className="box2">
                        <div className="laptop-text">
                            <h2 className="laptop-text-h2">Laptops</h2>
                            <p className="laptop-text-p">Discover high-performance laptops <br /> for work and play.</p>
                            <Browsebtn text="View More" />
                        </div>
                        <img className="laptop" src={laptop} alt="Laptops" />
                    </div>
                    <div className="box3">
                        <img className="headphone" src={headphone} alt="Headphones" />
                        <h2 className="headphone-h2">Headphones</h2>
                        <p className="headphone-p">Premium Audio Feel</p>
                        <img className="hp-arrow" src={arrow} alt="Arrow" />
                        </div>
                    <div className="box4">
                        <img className="mobile" src={mobile} alt="Mobile Phones" />
                        <h2 className="mobile-h2">Smart Phones</h2>
                        <p className="mobile-p">Built For Performance</p>
                        <img className="mobile-arrow" src={arrow} alt="Arrow" />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Categories;