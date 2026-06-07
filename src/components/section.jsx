import React from "react";
import Browsebtn from "@/components/browsebtn.jsx";

import headphone from "@/assets/images/headphone_tn.png";
import watch from "@/assets/images/smartwatch_tn.png";
import "@/styles/section.css";
function Section() {
    return (
        <>
            <section>
                <div className="right-div">
                    <h5 className="featured-right">Featured</h5>
                    <div className="hp-info">
                        <h2 className="hp-title">Noise Airwave</h2>
                        <h5 className="hp-description">Bluetooth 5.3 for fast pairing.<br/>
Large 40mm drivers deliver rich.</h5>
                        <h4 className="hp-price">USD $59.00</h4>
                    </div>
                    <img className="hp-tn" src={headphone} alt="headphone" />
                </div>
                <div className="left-div">
                    <h1 className="section-title">Modern Tech Essentials<br/>
Trusted Online Store</h1>
                    <p className="section-description">
Buy easily with trusted brands fast delivery secure payments guaranteed</p>
                    <div style={{marginTop: "20px",marginLeft :"5%"}}>
                    < Browsebtn />
                    </div>
                    <div className="left-bottom">
                        <h5 className="featured">Featured</h5>
                        <h3 className="sw-title">Apple Watch S7</h3>
                        <h4 className="sw-price">USD <span style={{textDecoration: "line-through"}}>$399.00</span> $299.00 </h4>
                        <img className="sw-tn" src={watch} alt="smartwatch" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section;