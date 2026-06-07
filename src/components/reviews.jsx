import "@/styles/reviews.css";
import leftarrow from "@/assets/icons/keyboard_arrow_left_50dp_000000_FILL0_wght600_GRAD0_opsz48.png";
import rightarrow from "@/assets/icons/keyboard_arrow_right_50dp_F3F3F3_FILL0_wght600_GRAD0_opsz48.png";
import comma from "@/assets/icons/Screenshot 2026-01-08 192211-Photoroom.png";
import profile1 from "@/assets/images/prof02.jpg";
import profile2 from "@/assets/images/profile0.jpg";
import profile3 from "@/assets/images/profile1.jpg";
function Reviews() {
    return (
        <>
            <div className="reviews">
                <div className="review-head">
                    <div style={{height: '150px'}}>
                        <h1 className="review-h2">What Our Customers Say</h1>
                        <p className="review-p">Real users share honest feedback on  performance, build quality, and daily usage.<br />
                            Make smarter buying decisions based on verified experiences, not marketing noise.</p>
                    </div>
                    <div className="buttons">
                        <img className="move-left" src={leftarrow} alt="left arrow" />
                        <img className="move-right" src={rightarrow} alt="right arrow" />
                    </div>
                </div>
                <div className="review-overflow">
                    <div className="card1">
                        <div className="profcard">
                            <div className="profpics">
                                <img className="profpic" src={profile1} alt="profile1" />
                            </div>
                            <div className="name-rate">
                                <h1 className="profname">Emily R</h1>
                                <p className="verify-user">Verified User</p>
                                <h1 className="profrate">★★★★★</h1>
                            </div>
                        </div>
                        <div className="parent-review1">
                            <div className="child1">
                                <img className="comma" src={comma} alt="comma" />
                                <div className="review-child">
                                    <h1 className="review-h1">Trusted Platform For Online Buying</h1>
                                    <p className="reviewchild-p">Everything worked as expected No fake claims Clear details Delivery updates were accurate Will shop again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="profcard">
                            <div className="profpics">
                                <img className="profpic" src={profile2} alt="profile2" />

                            </div>
                            <div className="name-rate">
                                <h1 className="profname">Daniel M</h1>
                                <p className="verify-user">Verified User</p>
                                <h1 className="profrate">★★★★★</h1>
                            </div>

                        </div>
                        <div className="parent-review2">
                            <div className="child2">
                                <img className="comma" src={comma} alt="comma" />
                                <div className="review-child">
                                    <h1 className="review-h1">Fast Delivery Genuine Products</h1>
                                    <p className="reviewchild-p">Order arrived on time Quality matched description Packaging was secure Overall experience felt trustworthy and smooth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card3">

                        <div className="profcard">
                            <div className="profpics">
                                <img className="profpic" src={profile3} alt="profile3" />

                            </div>
                            <div className="name-rate">
                                <h1 className="profname">Alex M</h1>
                                <p className="verify-user">Verified User</p>
                                <h1 className="profrate">★★★★★</h1>
                            </div>
                        </div>
                        <div className="parent-review3">
                            <div className="child3">
                                <img className="comma" src={comma} alt="comma" />
                                <div className="review-child">
                                    <h1 className="review-h1">Simple Safe Shopping Experience</h1>
                                    <p className="reviewchild-p">Easy to browse Honest reviews Secure payment Quick delivery This site feels reliable</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                 
            </div>
        </>
    )
}

export default Reviews;