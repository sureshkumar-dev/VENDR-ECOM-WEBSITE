import "@/styles/news.css";
import arrow from "@/assets/icons/black_arrow.png"
import Browsebtn from "@/components/browsebtn.jsx";
import tv from "@/assets/images/tv.jpg";
import vr from "@/assets/images/vr.jpg";
import laptop from "@/assets/images/sincerely-media-ylveRpZ8L1s-unsplash.jpg"
function News() {
    return (
        <>
            <article>
                <div className="head">
                    <h1 style={{ fontSize: "40px", fontWeight: "500", color: "black" }}>Explore our articles and news for recent<br /> updates and announcements</h1>
                    <div className="head-right">
                        <p>Explore our articles to stay informed with the latest <br /> updates, feature releases, product announcements.</p>
                        <Browsebtn text="Read More" />
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="news-grid">
                        <img className="vr-image" src={vr} alt="VR" />
                        <img className="tv-image" src={tv} alt="TV" />
                        <img className="lt-image" src={laptop} alt="laptop" />
                        <div className="vr-news">
                            <p>Virtual Reality is transforming  <br /> shopping, and training</p>
                            <img className="arrow-icon" src={arrow} alt="arrow" />
                        </div>
                        <div className="tv-news">
                            <p>Smart TVs deliver seamless <br /> streaming and vivid visuals.</p>
                            <img className="arrow-icon" src={arrow} alt="arrow" />
                        </div>
                        <div className="lt-news">
                            <p>Laptop innovations drive  <br /> and creativity on the go.</p>
                            <img className="arrow-icon" src={arrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
export default News;