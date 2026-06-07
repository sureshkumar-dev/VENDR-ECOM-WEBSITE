import "@/styles/newsletter.css";
function Newsletter() {
    return (
        <>
            <div className="newsletter">
                <div className="subscribe">
                    <h1 className="subscribe-title">Subscribe to our Email</h1>
                    <h1 className="subscribe-title2"> Newsletter and get 15% off</h1>
                    <p className="subscribe-text">Get updates on latest electronics gadgets offers and tech news delivered directly to your inbox</p>
                    <p className="subscribe-text2">Stay informed shop smarter every week</p>
                    <div className="input-wrap">
                        <input className="bg-white"  type="email" placeholder="Enter your email" />
                        <button className="subscribe-button">Subscribe</button>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Newsletter;